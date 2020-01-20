import React, { useEffect } from 'react';
import { get as _get, isEmpty as _isEmpty } from 'lodash';
import MainLayout from '../../components/MainLayout';
import Post from '../../components/Post';
import { connect } from 'react-redux';

import * as detailActions from '../../redux/actions/detail';
import { bindActionCreators } from 'redux';

const PostPage = (props) => {
  const { post, detailActions, match } = props;
  const params = _get(match, 'params', {});
  const id = +_get(params, 'id', '');

  useEffect(() => {
    detailActions.getDetailPostByIdRequest(id);
  }, []);

  return <MainLayout>{!_isEmpty(post) && <Post {...post} isDetail />}</MainLayout>;
};

const mapStateToProps = ({ detailReducer }) => ({
  post: _get(detailReducer, 'post', {})
});

const mapDispatchToProps = (dispatch) => ({
  detailActions: bindActionCreators(detailActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
