import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getHomePath } from '../../utils/route';

const notAuthenticated = (WrappedComponent) => {
  class Authorize extends Component {
    render() {
      const { isAuthenticated } = this.props;
      if (isAuthenticated) {
        return <Redirect to={getHomePath()} />;
      }
      return <WrappedComponent {...this.props} />;
    }
  }

  Authorize.propTypes = {
    isAuthenticated: PropTypes.bool
  };

  const mapStateToProps = ({ authReducer }) => {
    const { isAuthenticated } = authReducer;
    return {
      isAuthenticated
    };
  };

  return connect(mapStateToProps)(Authorize);
};

export default notAuthenticated;
