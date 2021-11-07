import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    borderColor: theme.colors.bgDark,
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 48,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    padding: 8,
  },
  errorInput: {
    borderColor: theme.colors.error,
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 2,
    height: 48,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    padding: 8,
  },
  errorText: {
    color: theme.colors.error,
    marginLeft: 16,
    marginTop: 5,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const textInputStyle = (!meta.error) ? styles.input : styles.errorInput;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        style={textInputStyle}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
