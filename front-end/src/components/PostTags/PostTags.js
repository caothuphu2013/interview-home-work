import React from "react";

import { Tag } from "antd";
import { TAGS } from "../../constants/config";

const PostTags = ({tags}) => (
  <div style={{float: 'right'}}>
    {tags.map((tag) => <Tag key={tag} color={TAGS.COLORS[Math.floor(Math.random() * (TAGS.COLORS.length - 1))]}>{tag}</Tag>)}
  </div>
);

export default PostTags;
