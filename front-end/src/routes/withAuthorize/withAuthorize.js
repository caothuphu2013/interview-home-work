import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RoutePath } from '../../constants/config';

const withAuthorize = (WrappedComponent) => {
  class Authorize extends Component {
    render() {
      const { isAuthenticated } = this.props;
      if (isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      }
      return <Redirect to={RoutePath.login} />;
    }
  }

  Authorize.propTypes = {
    isAuthenticated: PropTypes.bool,
    userRole: PropTypes.string
  };

  const mapStateToProps = ({ authReducer }) => {
    const { isAuthenticated } = authReducer;
    return {
      isAuthenticated
    };
  };

  return connect(mapStateToProps)(Authorize);
};

export default withAuthorize;
