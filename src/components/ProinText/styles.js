import styled from "styled-components";


export const TextContentUser = styled.p`
    font-size: ${props => `${props.fontSize}px`};
    color: ${props => props.theme.color.textColor};

    background-color: ${props => props.theme.color.secodaryColor};
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
`;
