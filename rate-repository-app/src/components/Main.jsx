import React from 'react';
import { StyleSheet, View } from 'react-native';
/**
 * For react-router-dom v6, replaced Switch with Routes
 * For react-router-dom v6, replace Redirect with Navigate
 **/
import { Route, Routes/*, Navigate*/ } from 'react-router-native';
import RepositoryList from './RepositoryList';
import RepositoryView from './RepositoryView';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateReview from './CreateReview';
import MyReviewsView from './MyReviewsView';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    //display: "flex",
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/review" element={<CreateReview />} />
        <Route path="/myreviews" element={<MyReviewsView />} />
        <Route path="/repo/:id" element={<RepositoryView />} />
        {/*<Navigate to="/" replace={true} />*/}
      </Routes>
    </View>
  );
};

export default Main;
