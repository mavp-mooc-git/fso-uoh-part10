import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import iconSearch from '../utils/iconUtils';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: 'silver',
    marginRight: 8,
    padding: 8,
    borderRadius: 4,
    width: 180,
  },
  btnText: {
    color: theme.colors.textPrimary
  },
  container: {
    borderRadius: 4,
    boxShadow: '0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),\
                0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),\
                0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%)',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.btnText,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    padding: 8
  },
  input: {
    backgroundImage: `url("${iconSearch}")`,
    backgroundPosition: '8px center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '24px 24px',
    borderColor: 'silver',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: '0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%),\
                0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%),\
                0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%)',
    color: theme.colors.textPrimary,
    flexGrow: 1,
    fontSize: theme.fontSizes.subheading,
    height: 40,
    margin: 16,
    paddingBottom: 8,
    paddingLeft: 48,
    paddingRight: 8,
    paddingTop: 8
  }
});

const SearchForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.input}
        name="search"
        placeholder="search keyword or reset filter"
      />
      <Pressable
        style={styles.button}
        onPress={onSubmit}
      >
        <Text style={styles.btnText} fontSize="body">Search / Reset</Text>
      </Pressable>
    </View>
  );
};

export const SearchContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SearchForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SearchBar = ({setSearch}) => {
  const onSubmit = (values) => {
    const { search } = values;
    setSearch(search);
  };

  return <SearchContainer onSubmit={onSubmit} />;
};

export default SearchBar;
