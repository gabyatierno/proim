import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import TextContentUser from './styles';

const ProinText = ({ children }) => {
  const configData = useSelector(
    (state) => state.sideBarReducer.controlSideBar,
  );

  return (
    <TextContentUser fontSize={configData.fontsizeContent}>
      {children}
    </TextContentUser>
  );
};

ProinText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProinText;
