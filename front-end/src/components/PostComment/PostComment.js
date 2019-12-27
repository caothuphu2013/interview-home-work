import React from "react";
import { Comment, List } from "antd";
import { getDataSource } from "./PostCommentConfig";
import './styles.scss';

const PostComment = (props) => {
  const { comments } = props;

  const dataSource = getDataSource(comments);

  return (
    <List
      className="post-comments"
      header={`${dataSource.length} ${dataSource.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={item => (
        <li>
          <Comment
            actions={item.actions}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    />
  );
};

export default PostComment;