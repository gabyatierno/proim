import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Main, Content } from './styles';
import NavBarPropperty from '../NavBar';
import FooterProperty from '../FooterProperty';

const MainContent = ({ children }) => {
  const configData = useSelector(
    (state) => state.sideBarReducer.controlSideBar,
  );

  return (
    <>
      <Main width={configData.size}>
        <NavBarPropperty />
        <Content>{children}</Content>
        <FooterProperty />
      </Main>
    </>
  );
};

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;
