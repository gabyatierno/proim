/* eslint-disable import/no-anonymous-default-export */
import { defineState } from 'redux-localstore';

const INITIAL_STATE = {
  controlSideBar: {
    show: true,
    size: 80,
    fontsizeContent: 15,
    isDark: true,
  },
  usersInfo: {
    nome: 'gaby',
    photoPerfil:
      'https://www.accessorize.com.br/wp-content/uploads/2021/08/fotos-para-perfil-whastapp-1.jpg',
  },
};

const initialState = defineState(INITIAL_STATE)('sideBarReducer');

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CONFIG':
      return {
        ...state,
        controlSideBar: action.config,
      };
    case 'SETTINGS_OPEN':
      return {
        ...state,
        controlSideBar: action.config,
      };
    case 'FONT_CONTENT':
      return {
        ...state,
        controlSideBar: {
          ...state.controlSideBar,
          fontsizeContent: action.config,
        },
      };
    case 'CHANGE_THEME':
      return {
        ...state,
        controlSideBar: { ...state.controlSideBar, isDark: action.config },
      };
    default:
      return state;
  }
};
