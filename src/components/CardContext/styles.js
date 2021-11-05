import styled from 'styled-components';

import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight';

export const Arrow = styled(ArrowRight)`
  color: ${({ theme }) => theme.color.textColor};
  opacity: 0.5;
`;

export const Card = styled.section`
  display: ${(props) => props.display};
  width: 250px;
  background-color: ${(props) => props.theme.color.secodaryColor};
  position: absolute;
  border-radius: 5px;
  padding: 10px;
  top: 50px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  cursor: initial;
`;

export const BoxConfig = styled.div`
  display: flex;
  flex-direction: ${(props = 'row') => props.direction};
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 5px 20px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.primaryColor};

  cursor: ${(props = 'initial') => props.cursor};
  p {
    font-size: 18px;
    opacity: 0.5;
    color: ${(props) => props.theme.color.textColor};
    margin: 5px;
  }

  &:hover ${Arrow} {
    color: ${({ theme }) => theme.color.hoverColorText};
    opacity: 1;
  }
`;

export const InputRange = styled.input`
  -webkit-appearance: none;
  appearance: none;
  display: inline-block;
  width: 50%;
  height: 0.3em;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.textColor};
  outline: none;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    background-color: ${(props) => props.theme.color.hoverColorText};
    opacity: 1;
  }

  /* para o Fire Fox */
  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${(props) => props.theme.color.textColor};
    border: none;
    &:hover {
      background-color: ${(props) => props.theme.color.hoverColorText};
    }
  }

  /* para browsers da MS */
  &::-ms-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${(props) => props.theme.color.textColor};
    border: none;
    &:hover {
      background-color: ${(props) => props.theme.color.hoverColorText};
    }
  }

  &::-webkit-slider-thumb {
    all: unset; /* limpa os estilos iniciais */
    -webkit-appearance: none; /* remove a aparencia padão */
    border: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${(props) => props.theme.color.textColor};
    &:hover {
      background-color: ${(props) => props.theme.color.hoverColorText};
    }
  }
`;
