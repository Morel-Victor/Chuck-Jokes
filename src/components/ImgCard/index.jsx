import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, ImgChuck } from './style';
import chuck from '../../assets/chuck.jpg';

export default function Cards({ isShow }) {
  return (
    <div>
      {isShow && <Tooltip>At your own risk</Tooltip>}
      <ImgChuck src={chuck} alt="the best" />
    </div>
  );
}

Cards.propTypes = {
  isShow: PropTypes.bool,
};
Cards.defaultProps = {
  isShow: false,
};
