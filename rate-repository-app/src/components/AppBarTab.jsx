import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from "react-router-native";
import theme from '../theme';

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
  return (
    <View style={styles.containerTab}>
      <Link to="/">
        <Text style={styles.tabbar}>Repositories</Text>
      </Link>
      <Link to="/login">
        <Text style={styles.tabbar}>Sign in</Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
