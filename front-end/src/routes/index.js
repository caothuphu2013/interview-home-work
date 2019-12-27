import { lazy } from 'react';
import { RoutePath } from '../constants/config';
import notAuthenticated from './notAuthenticated';
import withAuthorize from './withAuthorize';

const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const LogoutPage = lazy(() => import('../pages/LogoutPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const PostPage = lazy(() => import('../pages/PostPage'));

const AppRoutes = {
  getRoutes: () => [
    {
      path: RoutePath.register,
      component: notAuthenticated(RegisterPage),
      exact: true,
      isPrivate: false
    },
    {
      path: RoutePath.login,
      component: notAuthenticated(LoginPage),
      isPrivate: false
    },
    {
      path: RoutePath.logout,
      component: LogoutPage,
      isPrivate: false
    },
    {
      path: RoutePath.pageNotFound,
      component: NotFoundPage,
      isPrivate: false
    },
    {
      path: RoutePath.home,
      component: withAuthorize(HomePage),
      isPrivate: true,
      exact: true
    },
    {
      path: RoutePath.post,
      component: withAuthorize(PostPage),
      isPrivate: true
    }
  ]
};

export default AppRoutes;
