import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
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
    <View>
      <Pressable>
        <Text style={styles.tabbar}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
