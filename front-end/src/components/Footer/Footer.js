import React from "react";

import { Layout, Typography } from "antd";
import "./styles.scss";

const { Footer: FooterAnt } = Layout;
const { Text } = Typography;

const Footer = () => (
  <FooterAnt className="footer">
    <Text>My Blog ©2019 created by <a href="https://www.facebook.com/tieunais">Thoai Huynh</a></Text>
  </FooterAnt>
);

export default Footer;
