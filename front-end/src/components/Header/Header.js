import React from "react";
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Typography } from 'antd';
import UserMenu from '../UserMenu';
import SearchBar from "../SearchBar";
import './styles.scss';

const { Header: HeaderAnt } = Layout;
const { Title } = Typography;

const Header = (props) => {
  const { name, searchPostsRequest } = props;
  return (
    <HeaderAnt className='header'>
      <Row type="flex" justify="space-around" align="middle">
        <Col span={8} className='header__logo'>
          <Link to='/'>
            <img src="https://zigvy.com/wp-content/uploads/2018/03/zigvylogo.png" alt="Zigvy logo" />
          </Link>
        </Col>
        <Col span={4} className='header__title'>
          <Title level={3}>Blogs</Title>
        </Col>
        <Col span={2} className='header__searchBar'>
          <SearchBar searchPostsRequest={searchPostsRequest} />
        </Col>
        <Col span={1} className='header__user-menu'>
          <UserMenu name={name} />
        </Col>
      </Row>
    </HeaderAnt>
  );
};

export default Header;
