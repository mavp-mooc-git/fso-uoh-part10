import React from 'react';
import {
  Image, Platform, Pressable,
  StyleSheet, TouchableOpacity, View
} from 'react-native';
import { useNavigate } from 'react-router-native';
//import * as Linking from 'expo-linking';          // expo install expo-linking
import * as WebBrowser from 'expo-web-browser';     // expo install expo-web-browser
import Text from './Text';
import theme from '../theme';
import numberToK from '../utils/numberToK';

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: theme.colors.secondary,
      default: theme.colors.primary
    }),
    padding: 8,
    borderRadius: 4,
    width: 180,
  },
  btnGithub: {
    alignItems: "center",
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: theme.colors.secondary,
      default: theme.colors.primary
    }),
    margin: 16,
    padding: 16,
    borderRadius: 4,
    width: '95%',
  },
  btnText: {
    color: Platform.select({
      android: theme.colors.btnText,
      ios: theme.colors.primary,
      default: theme.colors.bgLight
    }),
  },
  container: {
    backgroundColor: theme.colors.btnText,
    borderRadius: 8,
    paddingBottom: 4,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    display: 'flex',
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  logo: {
    borderRadius: 4,
    height: 48,
    width: 48,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 20
  },
  titleData: {
    paddingLeft: 12,
    width: '90%',
  },
  textData: {
    paddingBottom: 8,
    textAlign: 'center',
    width: '25%',
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  separator: {
    paddingBottom: 8,
  }
});

const Title = ({data}) => {
  return (
    <View style={styles.title}>
      <Image
        style={styles.logo}
        source={{
          uri: data?.ownerAvatarUrl,
        }}
      />
      <View style={styles.titleData}>
        <Text
          style={styles.separator}
          fontWeight="bold"
          fontSize="subheading"
        >
          {data?.fullName}
        </Text>
        <Text
          style={styles.separator}
          numberOfLines={2}
          color="textSecondary"
        >
          {data?.description}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Button pressed')}
        >
          <Text style={styles.btnText} fontSize="subheading">{data?.language}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Data = ({data}) => {
  return (
    <View style={styles.data}>
      <Text style={styles.textData} fontWeight="bold">{numberToK(data?.stargazersCount)}</Text>
      <Text style={styles.textData} fontWeight="bold">{numberToK(data?.forksCount)}</Text>
      <Text style={styles.textData} fontWeight="bold">{numberToK(data?.reviewCount)}</Text>
      <Text style={styles.textData} fontWeight="bold">{numberToK(data?.ratingAverage)}</Text>
      <Text style={styles.textData} color="textSecondary">Stars</Text>
      <Text style={styles.textData} color="textSecondary">Forks</Text>
      <Text style={styles.textData} color="textSecondary">Reviews</Text>
      <Text style={styles.textData} color="textSecondary">Rating</Text>
    </View>
  );
};

const FlatList = ({repository, view}) => {
  const navigate = useNavigate();

  const handlePress = () => {
    navigate(`/repo/${repository?.id}`);
  };

  const handleLinking = (url) => {
    //Linking.openURL(url);
    WebBrowser.openBrowserAsync(url);
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress}
      >
        <Title data={repository} />
        <Data data={repository} />
        {(!view) ? null :
        <TouchableOpacity
          style={styles.btnGithub}
          onPress={() => handleLinking(repository?.url)}
        >
          <Text style={styles.btnText}
            fontSize="subheading"
            fontWeight="bold"
          >
            Open in GitHub
          </Text>
        </TouchableOpacity>}
      </Pressable>
    </View>
  );
};

export default FlatList;
