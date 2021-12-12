import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from "react-router-native";
import theme from '../theme';
import useSignOut from '../hooks/useSignOut';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  containerTab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabbar: {
    color: theme.colors.secondary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
  },
});

const AppBarTab = () => {
  const { data, loading, error } = useSignOut();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  
  if (loading) {
    return <div>loading data...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const SignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.containerTab}>
      <Link to="/">
        <Text style={styles.tabbar}>Repositories</Text>
      </Link>
      {(!data?.authorizedUser) ?
      <View style={styles.containerTab}>
        <Link to="/login">
          <Text style={styles.tabbar}>Sign in</Text>
        </Link>
        <Link to="/signup">
          <Text style={styles.tabbar}>Sign up</Text>
        </Link>
      </View> :
      <View style={styles.containerTab}>
        <Link to="/review">
          <Text style={styles.tabbar}>Create a Review</Text>
        </Link>
        <Link to="/">
          <Text style={styles.tabbar} onPress={SignOut}>Sign Out</Text>
        </Link>
      </View>}
    </View>
  );
};

export default AppBarTab;
