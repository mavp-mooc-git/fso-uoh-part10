import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ReviewItem from './ReviewItem';
import useMyReviews from '../hooks/useMyReviews';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviewsView = () => {
  const first = 3;

  const { myreviews, fetchMore } = useMyReviews({
    first,
    includeReviews: true
  });

  const onEndReach = () => {
    fetchMore();
    console.log('You have reached the end of the myreviews');
  };

  const myreviewsNodes = myreviews?.reviews
    ? myreviews.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={myreviewsNodes}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      initialNumToRender={first}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      // ...
    />
  );
};

export default MyReviewsView;
