import React from "react";
import { useSelector } from "react-redux";

import { 
    Main, 
    TextContentUser,
    Content,
} from './styles';
import NavBarPropperty from "../NavBar";
import FooterProperty from "../FooterProperty";


const MainContent = () => {

    const configData = useSelector(state => state.sideBarReducer.controlSideBar)

    return (
        <>
        <NavBarPropperty />
        <Main  width={configData.size}>
            <Content>
                <TextContentUser fontSize={configData.fontsizeContent}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo, quia quisquam fugiat qui, ipsa autem odio optio error doloremque culpa fugit, eos nisi earum corporis. Distinctio accusamus nobis enim.
                </TextContentUser>
                <TextContentUser fontSize={configData.fontsizeContent}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo, quia quisquam fugiat qui, ipsa autem odio optio error doloremque culpa fugit, eos nisi earum corporis. Distinctio accusamus nobis enim.
                </TextContentUser>
                <TextContentUser fontSize={configData.fontsizeContent}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo, quia quisquam fugiat qui, ipsa autem odio optio error doloremque culpa fugit, eos nisi earum corporis. Distinctio accusamus nobis enim.
                </TextContentUser>
                <TextContentUser fontSize={configData.fontsizeContent}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo, quia quisquam fugiat qui, ipsa autem odio optio error doloremque culpa fugit, eos nisi earum corporis. Distinctio accusamus nobis enim.
                </TextContentUser>
                <TextContentUser fontSize={configData.fontsizeContent}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo, quia quisquam fugiat qui, ipsa autem odio optio error doloremque culpa fugit, eos nisi earum corporis. Distinctio accusamus nobis enim.
                </TextContentUser>
                <TextContentUser fontSize={configData.fontsizeContent}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo, quia quisquam fugiat qui, ipsa autem odio optio error doloremque culpa fugit, eos nisi earum corporis. Distinctio accusamus nobis enim.
                </TextContentUser>
                <TextContentUser fontSize={configData.fontsizeContent}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo, quia quisquam fugiat qui, ipsa autem odio optio error doloremque culpa fugit, eos nisi earum corporis. Distinctio accusamus nobis enim.
                </TextContentUser>
                <TextContentUser fontSize={configData.fontsizeContent}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut explicabo, quia quisquam fugiat qui, ipsa autem odio optio error doloremque culpa fugit, eos nisi earum corporis. Distinctio accusamus nobis enim.
                </TextContentUser>
            </Content>
            <FooterProperty />
        </Main>
        </>
    );
}

export default MainContent;