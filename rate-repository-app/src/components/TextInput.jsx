import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  good: {
    borderColor: theme.colors.bgDark,
    borderWidth: 1,
  },
  error: {
    borderColor: theme.colors.error,
    borderWidth: 2,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.good, error && styles.error, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
