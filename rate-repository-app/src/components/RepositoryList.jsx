import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => <RepositoryItem data={item} />;

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

const RepositoryList = () => {
  const { data, loading, error } = useRepositories();

  if (loading) {
    return <Text>loading data...</Text>;
  } else if(data, !loading) {
    return <RepositoryListContainer repositories={data?.repositories} />;
  } else {
    return <Text>Error: {error}</Text>;
  }
};

export default RepositoryList;
