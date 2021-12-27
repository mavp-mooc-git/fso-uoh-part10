import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import SearchBar from './SearchBar';
import PickerList from './PickerList';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => <RepositoryItem repository={item} />;

export const RepositoryListContainer = ({
  repositories,
  onEndReach,
  setSearch,
  sortlist,
  setSortlist,
  initialNumToRender
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <View style={{flex: 1}}>
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      // other props
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      initialNumToRender={initialNumToRender}
      ListHeaderComponent={() => {
      return (
        <View>
          <SearchBar
            setSearch={setSearch}
          />
          <PickerList
            sortlist={sortlist}
            setSortlist={setSortlist}
          />
        </View>
      );
      }}
    />
    </View>
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
  const first = 4;

  const [params, setParams] = useState({
    first,
    orderDirection: "DESC",   // ASC, DESC
    orderBy: "CREATED_AT"     // CREATED_AT, RATING_AVERAGE
  });
  const { repositories, fetchMore } = useRepositories({
    ...params
  });
  const [sortlist, setSortlist] = useState({
    value: 'repo',
    index: 1
  });
  const [search, setSearch] = useState('');

  const onEndReach = () => {
    fetchMore();
    console.log('You have reached the end of the list');
  };

  useEffect(() => {
    (sortlist.index === 2) ? setParams({
      ...params,
      orderDirection: "DESC",
      orderBy: "RATING_AVERAGE",
    }) :
    (sortlist.index === 3) ? setParams({
      ...params,
      orderDirection: "ASC",
      orderBy: "RATING_AVERAGE",
    }) :
    setParams({
      ...params,
      orderDirection: "DESC",
      orderBy: "CREATED_AT",
    });
  }, [sortlist]);

  useEffect(() => {
    if(search !== '') {
      setParams({
        ...params,
        searchKeyword: search,
      });
    } else {
      setParams({
        ...params,
        searchKeyword: search,
      });
    }
  }, [search]);

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortlist={sortlist}
      setSortlist={setSortlist}
      setSearch={setSearch}
      onEndReach={onEndReach}
      initialNumToRender={first}
    />
  );
};

export default RepositoryList;
