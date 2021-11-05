import styled from 'styled-components';

export const Footer = styled.footer`
  border-top: 3px solid ${(props) => props.theme.color.hoverColorText};
  background-color: ${(props) => props.theme.color.primaryColor};
  padding: 60px;

  color: ${(props) => props.theme.color.textColor};
`;

export const SectionWraperContent = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  width: 100%;
  margin-bottom: 25px;
`;

export const SectionInfo = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 2px solid ${(props) => props.theme.color.hoverColorText};
  padding: 10px 0;

  h2,
  p {
    margin: 20px 20px 0 0;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const ParagraphInfo = styled.p``;

export const TitleInfo = styled.h2`
  font-size: 25px;
  font-family: 'Bebas Neue', cursive;
`;
