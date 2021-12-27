import React from 'react';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
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
    width: 100,
  },
  btnText: {
    color: theme.colors.textPrimary
  },
  container: {
    borderRadius: 4,
    elevation: 4,  // Android shadow box
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: theme.colors.btnText,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 16,
    padding: 8
  },
  bgimg: {
    flexGrow: 1,
    justifyContent: 'center',
    height: 24,
    width: 72
  },
  input: {
    borderColor: 'silver',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    color: theme.colors.textPrimary,
    flexGrow: 1,
    fontSize: theme.fontSizes.subheading,
    height: 40,
    margin: 16,
    paddingBottom: 8,
    paddingLeft: 48,
    paddingRight: 8,
    paddingTop: 8
  },
});

const SearchForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: iconSearch}}
        style={styles.bgimg}
        resizeMode={"contain"}  // 'contain', 'cover' or 'stretch'
      >
        <FormikTextInput
          style={styles.input}
          name="search"
          placeholder="search keyword or reset filter"
          numberOfLines={1}
          ellipsizeMode="end"
        />
      </ImageBackground>
      <Pressable
        style={styles.button}
        onPress={onSubmit}
      >
        <Text style={styles.btnText} fontSize="body">Search</Text>
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
