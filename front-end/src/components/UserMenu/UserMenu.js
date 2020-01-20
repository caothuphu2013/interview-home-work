import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Avatar, Menu, Dropdown } from 'antd';

import './styles.scss';

const UserMenu = ({ name, history, avatarSrc, ...restProps }) => (
  <Dropdown
    {...restProps}
    trigger={['click']}
    overlay={
      <Menu className="dropdownMenuOverlay">
        <Menu.Item className="userNameItem">{name}</Menu.Item>
        <Menu.Item onClick={() => history.push('/logout')}>Logout</Menu.Item>
      </Menu>
    }
    placement="bottomRight"
  >
    <Avatar icon="user" src={avatarSrc} className="avatarUser" />
  </Dropdown>
);

UserMenu.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  avatarSrc: PropTypes.string
};
UserMenu.defaultProps = {
  avatarSrc: ''
};

export default withRouter(UserMenu);
