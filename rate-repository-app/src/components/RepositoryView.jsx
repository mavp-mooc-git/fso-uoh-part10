import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import useRepository from '../hooks/useRepository';
import useReviews from '../hooks/useReviews';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryView = () => {
  //const id = useParams().id;
  const { id } = useParams();
  const first = 3;

  const { repository } = useRepository(id);
  const { reviews, fetchMore } = useReviews({
    first,
    id
  });

  const onEndReach = () => {
    fetchMore();
    console.log('You have reached the end of the review');
  };

  const reviewNodes = reviews
    ? reviews.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      initialNumToRender={first}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem
        repository={repository}
        view='true'
      />}
      // ...
    />
  );
};

export default RepositoryView;
