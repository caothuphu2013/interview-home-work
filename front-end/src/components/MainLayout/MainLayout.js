import React from 'react';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import { Layout } from 'antd';
import Header from '../Header';
import Footer from '../Footer';

import * as postsActions from '../../redux/actions/posts';
import { bindActionCreators } from 'redux';

const { Content } = Layout;

const MainLayout = (props) => {
  const { name, postsActions } = props;
  const { searchPostsRequest } = postsActions;

  return (
    <Layout>
      <Header name={name} searchPostsRequest={searchPostsRequest} />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>{props.children}</Content>
      <Footer />
    </Layout>
  );
};

const mapStateToProps = ({ userIdentityReducer }) => ({
  name: _get(userIdentityReducer, 'name', '')
});

const mapDispatchToProps = (dispatch) => ({
  postsActions: bindActionCreators(postsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
