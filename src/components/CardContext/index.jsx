import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import DarkModeToggle from 'react-dark-mode-toggle';

import {
  Card, BoxConfig, Arrow, InputRange,
} from './styles';

const CardContext = ({ display }) => {
  const configData = useSelector((state) => state.sideBarReducer);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-return-assign
  const setIsDarkMode = (value) => ({
    type: 'CHANGE_THEME',
    // eslint-disable-next-line no-param-reassign
    config: (value = !value),
  });

  const changeFontSize = (value) => ({
    type: 'FONT_CONTENT',
    config: value.target.value,
  });

  return (
    <Card display={display}>
      <BoxConfig>
        <p>FonteSize</p>
        <InputRange
          onChange={(e) => dispatch(changeFontSize(e))}
          type="range"
          name=""
          min="12"
          max="18"
          id="range"
        />
      </BoxConfig>
      <BoxConfig>
        <p>Temas</p>
        <DarkModeToggle
          onChange={() => dispatch(setIsDarkMode(configData.controlSideBar.isDark))}
          checked={configData.controlSideBar.isDark}
          size={50}
        />
      </BoxConfig>
      <BoxConfig cursor="pointer">
        <p>All Settings</p>
        <Arrow size={30} />
      </BoxConfig>
    </Card>
  );
};

CardContext.propTypes = {
  display: PropTypes.string.isRequired,
};

export default CardContext;
