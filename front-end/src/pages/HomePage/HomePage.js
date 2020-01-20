import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { get as _get } from 'lodash';
import * as postsActions from '../../redux/actions/posts';
import MainLayout from '../../components/MainLayout';
import Post from '../../components/Post';
import { withInfiniteScroll } from '../../hoc/index';

const HomePage = (props) => {
  const { numberItems, posts, postsActions } = props;

  useEffect(() => {
    postsActions.getAllPostsRequest();
  }, []);

  return <MainLayout>{posts.map((post, index) => index < numberItems && <Post key={_get(post, 'id', '')} {...post} />)}</MainLayout>;
};

const mapStateToProps = (state) => ({
  posts: _get(state, 'postsReducer.posts', [])
});

const mapDispatchToProps = (dispatch) => ({
  postsActions: bindActionCreators(postsActions, dispatch)
});

export default compose(withInfiniteScroll, connect(mapStateToProps, mapDispatchToProps))(HomePage);
