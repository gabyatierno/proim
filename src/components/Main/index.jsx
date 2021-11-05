import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import GlobalStyle from '../../styles/global';

import Container from './styles';
import SideBar from '../SideBar';
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cadastrar" element={<ProinFormPage />} />
            </Routes>
          </MainContent>
        </Container>
      </SubscribeThemeProvider>
    </Provider>
  );
}
