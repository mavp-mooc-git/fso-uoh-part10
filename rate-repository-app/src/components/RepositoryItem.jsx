import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});

const FlatList = ({data}) => {
  return (
    <View>
      <Text style={styles.title}>Full name: {data.fullName}</Text>
      <Text style={styles.title}>Description: {data.description}</Text>
      <Text style={styles.title}>Language: {data.language}</Text>
      <Text style={styles.title}>Stars: {data.stargazersCount}</Text>
      <Text style={styles.title}>Forks: {data.forksCount}</Text>
      <Text style={styles.title}>Reviews: {data.reviewCount}</Text>
      <Text style={styles.title}>Rating: {data.ratingAverage}</Text>
    </View>
  );
};

export default FlatList;
