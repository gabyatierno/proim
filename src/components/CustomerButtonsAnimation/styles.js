import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 5px;
  border-radius: 50%;
  transition: border 1s ease-out;
  cursor: pointer;
  transform: rotate(${(props) => `${props.deg}deg`});
  &:hover {
    background-color: hsl(240, 50%, 75%);
    border: 1px solid white;
  }
`;

export default Button;
