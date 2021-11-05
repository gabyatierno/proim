import styled from 'styled-components';

const TextContentUser = styled.p`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ theme }) => theme.color.textColor};

  background-color: ${({ theme }) => theme.color.secodaryColor};
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
`;

export default TextContentUser;
