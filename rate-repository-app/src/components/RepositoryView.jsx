import React from 'react';
import { Text } from 'react-native';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';

const RepositoryView = () => {
  //const id = useParams().id;
  const { id } = useParams();
  const { data, loading, error } = useRepository(id);

  if (loading) {
    return <Text>loading data...</Text>;
  } else if(data, !loading) {
    return <RepositoryItem data={data.repository} view='true' />;
  } else {
    return <Text>Error: {error}</Text>;
  }
};

export default RepositoryView;
