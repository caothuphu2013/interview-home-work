import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { get as _get } from 'lodash';
import LoginForm from "../../components/LoginForm";

import * as authActions from '../../redux/actions/auth';

const LoginPage = (props) => {
  const { isFetching, error, authActions } = props;
  return <LoginForm isFetching={isFetching} error={error} handleLogin={authActions.loginRequest} />;
};

const mapStateToProps = ({authReducer}) => ({
  isFetching: _get(authReducer, 'isFetching', false),
  error: _get(authReducer, 'error', '')
});

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
