import React from 'react';
import { Spin } from 'antd';
import './styles.scss';

const LoaderIcon = (props) => (
  <div className="loader-icon">
    <Spin {...props}>{props.children}</Spin>
  </div>
);

export default LoaderIcon;
