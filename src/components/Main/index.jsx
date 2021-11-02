import React from 'react';
import { Container } from './styles';

import { SideBar } from '../SideBar';
import MainContent from '../MainContent';
import { Provider } from 'react-redux';
import { GlobalStyle } from '../../styles/global';
import store from '../store';
import SubscribeThemeProvider from '../SubscribeThemeProvider';


export default function Main() {
  return (
    <Provider store={store}>
      <SubscribeThemeProvider>
        <GlobalStyle />
        <Container>
          <SideBar />
          <MainContent />
        </Container>
      </SubscribeThemeProvider>
    </Provider>
  );
}
