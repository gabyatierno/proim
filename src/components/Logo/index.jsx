import React from 'react';
import PropTypes from 'prop-types';

import ImgLogo from './styles';

import logo from '../../assets/logo.svg';

const Logo = ({ width, opacity }) => (
  <ImgLogo src={logo} alt="" width={width} opacity={opacity} />
);

Logo.propTypes = {
  width: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
};

export default Logo;
