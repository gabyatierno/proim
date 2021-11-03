import React from 'react';

import store from '../../store';
import { Provider } from 'react-redux';
import { GlobalStyle } from '../../styles/global';

import { Container } from './styles';
import { SideBar } from '../SideBar';
import MainContent from '../MainContent';
import SubscribeThemeProvider from '../SubscribeThemeProvider';

import Home from '../../pages/Home';
import ProinFormPage from '../../pages/Cadastro';


export default function Main() {
  return (
    <Provider store={store}>
      <SubscribeThemeProvider>
        <GlobalStyle />
        <Container>
          <SideBar />
          <MainContent>
            <Home />
            <ProinFormPage />
          </MainContent>
        </Container>
      </SubscribeThemeProvider>
    </Provider>
  );
}
