import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, ImgChuck } from './style';
import chuck from '../../assets/chuck.jpg';

export default function Cards({ isShow }) {
  return (
    <div className="cards">
      {isShow && <Tooltip>At your hown risk</Tooltip>}
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
