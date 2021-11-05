import styled from 'styled-components';

const ImgLogo = styled.img`
  width: ${(props) => `${props.width}%`};
  opacity: ${(props) => props.opacity};
  transition: 0.5s;
`;

export default ImgLogo;
