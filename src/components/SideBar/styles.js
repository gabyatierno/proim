import styled from 'styled-components';

import { KeyboardArrowRight } from '@styled-icons/material-outlined/KeyboardArrowRight';

export const BoxSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20%;
  height: 100%;
  background-image: linear-gradient(
    250deg,
    ${(props) => props.theme.color.secodaryColor},
    ${(props) => props.theme.color.thirtyColor}
  );

  transition: all 1s;

  position: fixed;
  top: 0;
  left: 0;

  padding: 15px;
  opacity: ${(props) => props.opacity};
`;

export const Arrow = styled(KeyboardArrowRight)`
  margin-right: 5px;
  transition: 0.5s;
  color: ${(props) => props.theme.color.textColor};
`;

export const BoxMenu = styled.section`
  margin-top: 15px;
  width: 100%;

  button {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    background-color: ${(props) => props.theme.color.secodaryColor};
    border: 3px solid green;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5px;
    &:hover {
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
        rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
      background-color: ${(props) => props.theme.color.hoverColorBg};
    }

    &:hover ${Arrow} {
      transform: rotate(90deg);
      color: ${(props) => props.theme.color.hoverColorText};
    }

    // resets
    border: none;

    p {
      color: ${(props) => props.theme.color.textColor};
      font-size: 18px;
      text-transform: capitalize;
      transition: 0.5s;
    }

    &:hover p {
      color: ${(props) => props.theme.color.hoverColorText};
    }
  }
`;
