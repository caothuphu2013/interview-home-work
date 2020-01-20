import React from 'react';
import { Tooltip } from 'antd';
import moment from 'moment';

export const getDataSource = (comments) =>
  comments.map((comment) => ({
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: comment.nameUser,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    content: <p>{comment.content}</p>,
    datetime: (
      <Tooltip title={moment(comment.created_at).format("YYYY-MM-DD HH:mm:ss")}>
        <span>{moment(comment.created_at).fromNow()}</span>
      </Tooltip>
    )
  }));
