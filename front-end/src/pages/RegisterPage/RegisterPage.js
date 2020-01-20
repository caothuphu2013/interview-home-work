import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { get as _get } from 'lodash';
import RegisterForm from '../../components/RegisterForm';

import * as authActions from '../../redux/actions/auth';

const RegisterPage = (props) => {
  const { isRegistered, isFetching, error, authActions } = props;
  if (isRegistered) {
    return <Redirect to="/login" />;
  }
  return <RegisterForm isFetching={isFetching} error={error} handleRegister={authActions.registerRequest} />;
};

const mapStateToProps = ({ authReducer }) => ({
  isRegistered: _get(authReducer, 'isRegistered', false),
  isFetching: _get(authReducer, 'isFetching', false),
  error: _get(authReducer, 'error', '')
});

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
