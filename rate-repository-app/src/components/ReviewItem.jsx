import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from './Text';
import theme from '../theme';
import formatDate from '../utils/formatDate';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.btnText,
    borderRadius: 8,
    paddingBottom: 4,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    display: 'flex',
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
