import React from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: theme.colors.secondary,
      default: theme.colors.primary
    }),
    borderRadius: 4,
    height: 48,
    margin: 16,
    padding: 8
  },
  btnText: {
    color: Platform.select({
      android: theme.colors.btnText,
      ios: theme.colors.primary,
      default: theme.colors.bgLight
    }),
  },
  container: {
    backgroundColor: theme.colors.btnText,
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be greater or equal to 5')
    .required('Username is required'),
    password: yup
    .string()
    .min(5, 'Password must be greater or equal to 5')
    .required('Password is required'),
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
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <Loginform onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
