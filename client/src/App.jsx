import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App(props) {
  const { token } = props;

  console.log(token, "tokennn");
  return (
    <BrowserRouter>
      {/* Header */}
      {token != null && (
        <Header />
      )}
      {/* Routes */}
      <Routes path="/">
        {/* Specific routes based on token existence */}
        {token != null ? (
          <Route path='/' element={<Home />} />
        ) : (
          <Route path='/' element={<Signin />} />
        )}
        {/* Common routes */}
        <Route path='/About' element={<About />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Sign-up' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.authentication.accessToken
      ? state.authentication.accessToken
      : localStorage.getItem("token"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
