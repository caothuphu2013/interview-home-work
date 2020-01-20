import React from 'react';
import { Typography, Row, Col } from 'antd';

import PostTags from '../PostTags';
import './styles.scss';
import { formatDateByCreatedAt } from '../../utils/dateFormat';

const { Title } = Typography;

const PostHeader = (props) => {
  const { title, tags, nameUser, created_at } = props;
  return (
    <div className="post-header">
      <Title className="post-header__title" level={2}>
        {title}
      </Title>
      <Row type="flex" justify="space-between">
        <Col span={6}>
          <h3>Author: {nameUser} </h3>
          <h3>{formatDateByCreatedAt(created_at)}</h3>
        </Col>
        <Col span={6}>
          <PostTags tags={tags} />
        </Col>
      </Row>
    </div>
  );
};

export default PostHeader;
