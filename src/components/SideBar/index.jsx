/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { BoxSideBar, BoxMenu, Arrow } from './styles';
import Logo from '../Logo';

const SideBar = () => {
  const configData = useSelector(
    (state) => state.sideBarReducer.controlSideBar,
  );

  const showLogo = !configData.show ? 0 : 1;

  return (
    <BoxSideBar opacity={showLogo}>
      <Logo width="60" opacity={showLogo} />
      <BoxMenu>
        <Link to="/">
          <button>
            <Arrow size={20} />
            <p>home</p>
          </button>
        </Link>
        <Link to="/cadastrar">
          <button>
            <Arrow size={20} />
            <p>cadastrar</p>
          </button>
        </Link>
      </BoxMenu>
    </BoxSideBar>
  );
};

export default SideBar;
