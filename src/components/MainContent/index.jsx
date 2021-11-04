import React from "react";
import { useSelector } from "react-redux";

import { 
    Main, 
    Content,
} from './styles';
import NavBarPropperty from "../NavBar";
import { 
    ProinForms, 
    ProinInputEmail, 
    ProinInputNome, 
    ProinInputSenha,
    ProinInputSubmit,
} from '../ProinForms';
import FooterProperty from "../FooterProperty";


const MainContent = (props) => {

    const configData = useSelector(state => state.sideBarReducer.controlSideBar);

    return (
        <>
        <Main  width={configData.size}>
            <NavBarPropperty />
            <Content>
                {props.children}
            </Content>
            <FooterProperty />
        </Main>
        </>
    );
}

export default MainContent;