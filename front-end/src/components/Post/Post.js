import React from 'react';
import PostHeader from '../PostHeader';
import PostContent from '../PostContent';
import PostComment from '../PostComment';

import './styles.scss';

const Post = (props) => {
  const { id, content, comments, isDetail } = props;
  return (
    <div className="post-section">
      <PostHeader {...props} />
      <PostContent isDetail={isDetail} idPost={id} content={content}/>
      <PostComment comments={comments} />
    </div>
  );
};

export default Post;