import React from "react";
import PropTypes from "prop-types";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import "./styles.scss";
const { Paragraph } = Typography;

const PostContent = ({ content, idPost, isDetail }) => {
  return (
    <div className="post-content">
      {isDetail && <Paragraph>{content}</Paragraph>}
      {!isDetail && (
        <>
          <Paragraph ellipsis={{ rows: 3 }}>{content}</Paragraph>
          <Link to={`/post/${idPost}`} className="see-detail">
            See detail
          </Link>
        </>
      )}
    </div>
  );
};

PostContent.propTypes = {
  content: PropTypes.string
};

export default PostContent;
