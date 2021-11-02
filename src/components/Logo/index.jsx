import React from "react";

import { ImgLogo } from './styles'

import logo from '../../assets/logo.svg'

const Logo = (props) => {
    return (
        <ImgLogo src={logo} alt="" width={props.width} opacity={props.opacity}/>
    );
}

export default Logo;