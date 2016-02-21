import React from 'react';
import { connect } from 'react-redux';
import { login } from './../actions';
import Login from './Login';

const mapStateToProps = (state) => {
    console.log("CONTAINER:");
    console.log(state);
    return {
      isAuthenticated: state.isAuthenticated,
      user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (cred) => {
      dispatch(login(cred));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
