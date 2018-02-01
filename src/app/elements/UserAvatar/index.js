import React from 'react';
import PropTypes from "prop-types";
import { Avatar } from 'antd';
import './index.css';

/**
 * elements/UserAvatar: Specified User Avatar
 * @returns {HTMLElement} return UserAvatar node
 */
const UserAvatar = ({ size, shape, name, showFullName, trimString, trimLength }) => {
  const shorName = trimString ? name.substring(0, trimLength).toUpperCase() : name;
  
  function fullNameElm() {
    return showFullName && <span className="avatar-fullname">{name}</span>;
  };

  return (
    <span>
      <Avatar shape={shape} size={size} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{shorName}</Avatar>
      {fullNameElm()}
    </span>
  )
}

UserAvatar.defaultProps = {
  size: 'large',
  shape: 'square',
  name: '-_-',
  trimString: true,
  trimLength: 2
}


UserAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(['square', 'circle']),
  size: PropTypes.oneOf(['large', 'small']),
  showFullName: PropTypes.bool,
  trimString: PropTypes.bool,
  trimLength: PropTypes.number
};

export default UserAvatar;
