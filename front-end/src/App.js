import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { RoutePath } from "./constants/config";
import AppRoutes from "./routes";
import { Spin } from 'antd';
import * as userIdentityActions from './redux/actions/userIdentity';
import { bindActionCreators } from "redux";
import "antd/dist/antd.css";

const App = props => {
  const { authReducer, userIdentityActions } = props;
  const { isAuthenticated, username } = authReducer;

  useEffect(() => {
    if (isAuthenticated) {
      userIdentityActions.getUserIdentityRequest(username);
    }
  }, []);

  return (
    <Suspense fallback={<Spin/>}>
      <Switch>
        {AppRoutes.getRoutes().map(route => {
          if (route.isPrivate) {
            if (isAuthenticated) {
              return <Route key={route.path} {...route} />;
            } else {
              return <Redirect key={route.path} to={RoutePath.login} />;
            }
          }
          return <Route key={route.path} {...route} />;
        })}
      </Switch>
    </Suspense>
  );
};

const mapStateToProps = ({ authReducer }) => ({
  authReducer
});

const mapDispatchToProps = (dispatch) => ({
  userIdentityActions: bindActionCreators(userIdentityActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
