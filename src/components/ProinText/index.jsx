import React from "react";
import { useSelector } from "react-redux";
import { TextContentUser } from './styles';


const ProinText = (props) => {

    const configData = useSelector(state => state.sideBarReducer.controlSideBar);

    return(
        <TextContentUser fontSize={configData.fontsizeContent}>
            {props.children}
        </TextContentUser>
    );
}

export default ProinText;