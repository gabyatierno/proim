import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import LightTheme from '../../styles/themes/light';
import DarkTheme from '../../styles/themes/dark';


const SubscribeThemeProvider = ({ children }) => {

    const theme = useSelector(state => state.sideBarReducer.controlSideBar);

    return (
        <ThemeProvider theme={theme.isDark ? DarkTheme : LightTheme}>
            {children}
        </ThemeProvider>
    );
}

export default SubscribeThemeProvider;