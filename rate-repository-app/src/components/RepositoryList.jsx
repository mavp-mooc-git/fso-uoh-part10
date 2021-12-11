import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => <RepositoryItem repository={item} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      // other props
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

/**
 * Warning: Can't perform a React state update on an unmounted component.
 * This is a no-op, but it indicates a memory leak in your application.
 * To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
 *   in Image (created by Title)
 *   in div (created by View)
 *   ...
 **/

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories();

  if (loading) {
    return <Text>loading data...</Text>;
  } else if(repositories, !loading) {
    return <RepositoryListContainer repositories={repositories} />;
  } else {
    return <Text>Error: {error}</Text>;
  }
};

export default RepositoryList;
