import React from 'react';
import {
  Alert, Platform, StyleSheet, TouchableOpacity, View
} from 'react-native';
import useDeleteReview from '../hooks/useDeleteReview';
import Text from './Text';
import theme from '../theme';
import formatDate from '../utils/formatDate';
/**
 * For react-router-dom v6, replaced useHistory with useNavigate
 **/
 import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: theme.colors.secondary,
      default: theme.colors.primary
    }),
    margin: 8,
    padding: 8,
    borderRadius: 4,
    width: 200,
  },
  btnError: {
    alignItems: "center",
    backgroundColor: theme.colors.error,
    margin: 8,
    padding: 8,
    borderRadius: 4,
    width: 200,
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
  controls: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'center',
    margin: 10
  },
  rating: {
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: theme.colors.primary,
    borderRadius: 32,  /* width / 2 */
    color: theme.colors.primary,
    height: 64,
    minWidth: 64,
    width: 64,
    paddingBottom: 8,
    paddingTop: 12,
    textAlign: 'center',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleData: {
    paddingLeft: 12,
    width: '90%',
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
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  separator: {
    paddingBottom: 8,
  }
});

const Reviews = ({data}) => {
  const [deleteReview] = useDeleteReview();
  const navigate = useNavigate();

  const showAlert = () => Alert.alert(
    "Delete review",
    "Are you sure you want to delete this review ?",
    [
      {
        text: "Cancel",
        style: "default"
      },
      {
        text: "Delete",
        style: "default",
        onPress: async () => {
          await deleteReview(data.id);
        }
      }
    ]
  );

  return (
    <View style={styles.title}>
      <Text
          style={styles.separator, styles.rating}
          fontWeight="bold"
          fontSize="heading"
        >
          {data.rating}
      </Text>
      <View style={styles.titleData}>
        <Text
          style={styles.separator}
          fontWeight="bold"
          fontSize="subheading"
        >
          {(data?.user) ? data?.user.username
                        : data.repositoryId.split(".").join("/")}
        </Text>
        <Text
          style={styles.separator}
          color="textSecondary"
        >
          {formatDate(data.createdAt)}
        </Text>
        <Text
          style={styles.separator}
          numberOfLines={7}
        >
          {data.text}
        </Text>
        {(data?.user) ? null :
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate(`/repo/${data.repositoryId}`)}
          >
            <Text style={styles.btnText} fontSize="body">View repository</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnError}
            onPress={showAlert}
          >
            <Text style={styles.btnText} fontSize="body">Delete review</Text>
          </TouchableOpacity>
        </View>}
      </View>
    </View>
  );
};

const ReviewItem = ({review}) => {
  if(!review) return null;

  return (
    <View style={styles.container}>
      <Reviews data={review} />
    </View>
  );
};

export default ReviewItem;
