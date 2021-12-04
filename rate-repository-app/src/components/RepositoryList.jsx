import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => <RepositoryItem data={item} />;

const RepositoryList = () => {
  const { data, loading, error } = useRepositories();

  if (loading) {
    return <div>loading data...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Get the nodes from the edges array
  const repositoryNodes = data.repositories
    ? data.repositories.edges.map(edge => edge.node)
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

export default RepositoryList;
