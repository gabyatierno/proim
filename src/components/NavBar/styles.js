import styled from 'styled-components';

import { RightArrowAlt } from '@styled-icons/boxicons-solid/RightArrowAlt';
import { Settings } from '@styled-icons/material-rounded/Settings';

export const ArrowSideBarMove = styled(RightArrowAlt)`
  font-weight: 700;
  position: absolute;
  width: 35px;
  height: 35px;
  color: ${(props) => props.theme.color.textColor};
`;

export const Configs = styled(Settings)`
  font-weight: 700;
  position: absolute;
  color: ${({ isOpen, theme }) => (isOpen
    ? theme.color.hoverColorText
    : theme.color.textColor)};
`;

export const ControlSideBar = styled.nav`
  display: flex;
  align-items: center;
  /* melhor valor para alinhar o logo */
  width: 100px;
  height: 100%;
`;

export const CustomerButtons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 38px;
  height: 38px;
  padding: 5px;
  margin-right: 10px;

  border-radius: 50%;
  border: none;

  background-color: ${(props) => (props.isOpen
    ? props.theme.color.hoverColorBg
    : props.theme.color.thirtyColor)};

  transition: 0.3s ease-out;

  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.hoverColorBg};
  }
  &:hover ${Configs}, &:hover ${ArrowSideBarMove} {
    color: ${(props) => props.theme.color.hoverColorText};
  }
`;

export const CustomerButtonsAnimation = styled(CustomerButtons)`
  transform: rotate(${(props) => `${props.deg}deg`});
`;

export const ControlUserAction = styled(CustomerButtons)`
  width: 90px;
  border-radius: 25px;
  padding: 1px 13px;
  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 5px;
  }
  p {
    font-size: 18px;
    color: ${(props) => props.theme.color.textColor};
    text-transform: capitalize;
  }
  &:hover p {
    color: ${(props) => props.theme.color.hoverColorText};
  }
`;

export const UserOptions = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.secodaryColor};
  height: 50px;
  width: ${(props) => `${props.width}%`};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 15px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 15px 8px 16px -8px;

  transition: all 0.5s ease-out;
`;
