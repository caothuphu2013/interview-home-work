import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { get as _get } from 'lodash';
import * as authActions from '../../redux/actions/auth';

const Logout = (props) => {
  const { isAuthenticated, authActions } = props;

  useEffect(() => {
    authActions.logoutRequest();
  }, []);

  if (!isAuthenticated) {
    return <Redirect to='/login' />
  }

  return <p>Logout</p>
}

const mapStateToProps = ({authReducer}) => ({
  isAuthenticated: _get(authReducer, 'isAuthenticated', false)
});

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout);