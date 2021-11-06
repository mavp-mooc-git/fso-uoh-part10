import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    height: 48,
    margin: 16,
    padding: 8
  },
  btnText: {
    color: theme.colors.btnText,
  },
  container: {
    backgroundColor: theme.colors.btnText,
  }
});

const initialValues = {
  username: '',
  password: '',
};

const Loginform = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable
        style={styles.button}
        onPress={onSubmit}
      >
        <Text style={styles.btnText} fontSize="subheading">Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    const username = values.username;
    const password = values.password;

    console.log(username, password);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <Loginform onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
