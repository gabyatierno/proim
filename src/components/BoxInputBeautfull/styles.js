import styled from 'styled-components';

import { Search as SearchResult } from '@styled-icons/fa-solid/Search';
import { Search } from '@styled-icons/bootstrap/Search';

export const SearchStyles = styled(Search)`
  width: 18px;
  height: 18px;
  color: ${(props) => props.theme.color.textColor};
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.3s;
  margin-right: 15px;
  &:hover {
    opacity: 1;
  }
`;

export const SearchResultProperty = styled(SearchResult)`
  margin-right: 10px;
  background: ${(props) => props.theme.color.primaryColor};
  padding: 10px;
  border-radius: 50%;
`;

export const InputMain = styled.input.attrs({
  placeholder: 'digite aqui',
  maxLength: 30,
})`
  width: 100%;
  background-color: ${(props) => props.theme.color.thirtyColor};
  height: 100%;
  margin-right: 5px;
  color: ${(props) => props.theme.color.textColor};
  font-size: 15px;

  /* reset */
  border: none;
  box-shadow: 0 0 0 0;
  outline: none;
`;

export const LabelMain = styled.label`
  background-color: ${(props) => props.theme.color.thirtyColor};
  border-radius: 20px;
  padding: 10px 20px 10px 25px;
  width: 90%;
  display: flex;
  align-items: center;
`;

export const ResultSearch = styled.ul`
  width: 95%;
  margin-top: 10px;
  transition: 0.3s;
  display: none;
  li {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 5px;
    border-radius: 5px;
    font-size: 15px;
    transition: 0.3s;
    color: ${(props) => props.theme.color.textColor};
    &:hover {
      background-color: ${(props) => props.theme.color.thirtyColor};
    }
  }
`;

export const BoxInputBeautfull = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  position: absolute;
  top: 0;
  left: 30%;

  width: 30%;
  height: auto;
  background-color: ${(props) => props.theme.color.secodaryColor};
  border-radius: 0 0 15px 15px;
  padding: 5px;
  transition: 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    background-color: ${(props) => props.theme.color.secodaryColor};
    padding: 5px 5px 10px 5px;
  }

  &:hover ${LabelMain}, &:hover ${InputMain} {
    background-color: ${(props) => props.theme.color.thirtyColor};
    color: ${(props) => props.theme.color.textColor};
  }

  &:hover ${SearchStyles} {
    display: none;
  }

  &:hover ${ResultSearch} {
    display: block;
  }
`;
