import React from 'react';
import Button from './styles';

const CustomerButtonsAnimation = (props) => (
  <Button deg={props.deg}>{props.children}</Button>
);

export default CustomerButtonsAnimation;
