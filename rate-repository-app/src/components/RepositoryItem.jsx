import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    padding: 8,
    borderRadius: 4,
    width: 180,
  },
  btnText: {
    color: theme.colors.btnText,
  },
  container: {
    backgroundColor: theme.colors.btnText,
    borderRadius: 8,
    paddingBottom: 4,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
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
    flexGrow: 1,
    paddingLeft: 12,
  },
  textData: {
    paddingBottom: 8,
    textAlign: 'center',
    width: '25%'
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
          uri: data.ownerAvatarUrl,
        }}
      />
      <View style={styles.titleData}>
        <Text
          style={styles.separator}
          fontWeight="bold"
          fontSize="subheading"
        >
          {data.fullName}
        </Text>
        <Text
          style={styles.separator}
          color="textSecondary"
        >
          {data.description}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Button pressed')}
        >
          <Text style={styles.btnText} fontSize="subheading">{data.language}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const numberToK = (number) => (number >= 1000) ? (number/1000).toFixed(1)+'k' : number;

const Data = ({data}) => {
  return (
    <View style={styles.data}>
      <Text style={styles.textData} fontWeight="bold">{numberToK(data.stargazersCount)}</Text>
      <Text style={styles.textData} fontWeight="bold">{numberToK(data.forksCount)}</Text>
      <Text style={styles.textData} fontWeight="bold">{numberToK(data.reviewCount)}</Text>
      <Text style={styles.textData} fontWeight="bold">{numberToK(data.ratingAverage)}</Text>
      <Text style={styles.textData} color="textSecondary">Stars</Text>
      <Text style={styles.textData} color="textSecondary">Forks</Text>
      <Text style={styles.textData} color="textSecondary">Reviews</Text>
      <Text style={styles.textData} color="textSecondary">Rating</Text>
    </View>
  );
};

const FlatList = ({data}) => {
  return (
    <View style={styles.container}>
      <Title data={data} />
      <Data data={data} />
    </View>
  );
};

export default FlatList;
