import React from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import useSignUp from '../hooks/useSignUp';
/**
 * For react-router-dom v6, replaced useHistory with useNavigate
 **/
import { useNavigate } from "react-router-native";

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
  username: yup.string()
    .min(3, 'Username must be greater than or equal to 3')
    .max(30, 'Username must be less than or equal to 30')
    .required('Username is required'),
  password: yup.string()
    .min(5, 'Username must be greater than or equal to 5')
    .max(50, 'Username must be less than or equal to 50')
    .required('Password is required'),
  confirm: yup.mixed()
    .oneOf([yup.ref('password'), null], "Password confirmation must be equal to password field")
    .required('Password confirmation is required')
});

const initialValues = {
  username: '',
  password: '',
  confirm: ''
};

const SigUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput name="confirm" placeholder="Password confirmation" secureTextEntry />
      <Pressable
        style={styles.button}
        onPress={onSubmit}
      >
        <Text style={styles.btnText} fontSize="subheading">Sign Up</Text>
      </Pressable>
    </View>
  );
};

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SigUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signUp({ username, password });
      console.log(data?.createUser?.username);
      // For react-router-dom v6, replaced history.push("/") with navigate("/")
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
