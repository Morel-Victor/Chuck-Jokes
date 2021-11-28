import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, ImgChuck, ImgExplosion, WhiteBackground } from './style';
import chuck from '../../assets/chuck.png';
import chuck2 from '../../assets/chuck2.png';
import imgExplosion from '../../assets/explosion.gif';

export default function ImgCards({ isShow, isOwnRisk, explosion }) {
  return (
    <div>
      {explosion && <ImgExplosion src={imgExplosion} alt="the best" />}
      <WhiteBackground>.</WhiteBackground>
      {isShow === false ? (
        <ImgChuck src={chuck2} alt="the best" />
      ) : (
        <ImgChuck src={chuck} alt="the best" />
      )}
      {isOwnRisk && <Tooltip>At your own risk</Tooltip>}
    </div>
  );
}

ImgCards.propTypes = {
  isShow: PropTypes.bool,
  isOwnRisk: PropTypes.bool,
  explosion: PropTypes.string,
};
ImgCards.defaultProps = {
  isShow: false,
  isOwnRisk: false,
  explosion: '',
};
