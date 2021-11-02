import styled from "styled-components";


export const Main = styled.main`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.color.primaryColor};
    width: ${props => `${props.width}%`};
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    transition: all 0.5s ease-out;
    margin-top: 50px;
`;

export const Content = styled.section`
    padding: 15px;
`;

export const TextContentUser = styled.p`
    font-size: ${props => `${props.fontSize}px`};
    color: ${props => props.theme.color.textColor};
    
    background-color: ${props => props.theme.color.secodaryColor};
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
`;

