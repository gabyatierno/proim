import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import LightTheme from '../../styles/themes/light';
import DarkTheme from '../../styles/themes/dark';

const SubscribeThemeProvider = ({ children }) => {
  const theme = useSelector((state) => state.sideBarReducer.controlSideBar);

  return (
    <ThemeProvider theme={theme.isDark ? DarkTheme : LightTheme}>
      {children}
    </ThemeProvider>
  );
};

SubscribeThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubscribeThemeProvider;
