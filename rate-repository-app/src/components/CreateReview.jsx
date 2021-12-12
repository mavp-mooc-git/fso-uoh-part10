import React from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import useCreateReview from '../hooks/useCreateReview';
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
  },
  textarea: {
    borderRadius: 4,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
  }
});

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .min(3, 'Repository owner name must be greater or equal to 5')
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .min(3, 'Repository name must be greater or equal to 5')
    .required('Repository name is required'),
  rating: yup
    .number().positive().integer().min(0).max(100)
    .required('Rating is required'),
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const Reviewform = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Github repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Github repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput
        name="text"
        placeholder="Review (optional)"
        multiline
        textAlignVertical="top"
        numberOfLines={7}
        style={styles.textarea}
      />
      <Pressable
        style={styles.button}
        onPress={onSubmit}
      >
        <Text style={styles.btnText} fontSize="subheading">Create a review</Text>
      </Pressable>
    </View>
  );
};

export const ReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <Reviewform onSubmit={handleSubmit} />}
    </Formik>
  );
};

const CreateReview = () => {
  const [newReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const { data } = await newReview({ ownerName, repositoryName, rating: Number(rating), text });
      const url = `/repo/${data.createReview.repositoryId}`;
      // For react-router-dom v6, replaced history.push("/") with navigate("/")
      navigate(url);
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
