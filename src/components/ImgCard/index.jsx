import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, ImgChuck } from './style';
import chuck from '../../assets/chuck.jpg';
import chuck2 from '../../assets/chuck2.jpg';

export default function Cards({ isShow, isOwnRisk }) {
  return (
    <div>
      {isShow === false ? (
        <ImgChuck src={chuck2} alt="the best" />
      ) : (
        <ImgChuck src={chuck} alt="the best" />
      )}
      {isOwnRisk && <Tooltip>At your own risk</Tooltip>}
    </div>
  );
}

Cards.propTypes = {
  isShow: PropTypes.bool,
  isOwnRisk: PropTypes.bool,
};
Cards.defaultProps = {
  isShow: false,
  isOwnRisk: false,
};
