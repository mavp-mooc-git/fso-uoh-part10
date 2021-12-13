import React, { useEffect, useState } from 'react';
import { View } from 'react-native-web';
import { FlatList, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import PickerList from './PickerList';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => <RepositoryItem repository={item} />;

export const RepositoryListContainer = ({ repositories, sortlist, setSortlist }) => {
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
      ListHeaderComponent={() => <PickerList
        sortlist={sortlist}
        setSortlist={setSortlist}
       />}
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
  const [params, setParams] = useState({
    orderDirection: "DESC",   // ASC, DESC
    orderBy: "CREATED_AT"     // CREATED_AT, RATING_AVERAGE
  });
  const { repositories, loading, error } = useRepositories({params});
  const [sortlist, setSortlist] = useState({
    value: 'repo',
    index: 1
  });

  useEffect(() => {
    (sortlist.index === 2) ? setParams({
      orderDirection: "DESC",
      orderBy: "RATING_AVERAGE"
    }) :
    (sortlist.index === 3) ? setParams({
      orderDirection: "ASC",
      orderBy: "RATING_AVERAGE"
    }) :
    setParams({
      orderDirection: "DESC",
      orderBy: "CREATED_AT"
    });
  }, [sortlist]);

  if (loading) {
    return <Text>loading data...</Text>;
  } else if(repositories, !loading) {
    return (
      <RepositoryListContainer
        repositories={repositories}
        sortlist={sortlist}
        setSortlist={setSortlist}
      />
    );
  } else {
    return <Text>Error: {error}</Text>;
  }
};

export default RepositoryList;
