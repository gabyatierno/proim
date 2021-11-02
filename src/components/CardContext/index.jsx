import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DarkModeToggle from "react-dark-mode-toggle";

import { Card, BoxConfig, Arrow, InputRange } from './styles';

const CardContext = (props) => {

    const configData = useSelector(state => state.sideBarReducer)
    const dispatch = useDispatch();

    const setIsDarkMode = (value) => ({
        type: 'CHANGE_THEME',
        config: value = !value,
    });

    const changeFontSize = (value) => ({
        type: 'FONT_CONTENT',
        config: value.target.value
    });

    return (
        <Card display={props.display}>
            <BoxConfig>
                <p>FonteSize</p>
                <InputRange
                    onChange={(e) => dispatch(changeFontSize(e))}
                    type="range" name="" min="12" max="18" id="range"
                />
            </BoxConfig>
            <BoxConfig>
                <p>Temas</p>
                <DarkModeToggle
                    onChange={() => dispatch(setIsDarkMode(configData.controlSideBar.isDark))}
                    checked={configData.controlSideBar.isDark}
                    size={50}
                />
            </BoxConfig>
            <BoxConfig cursor="pointer">
                <p>All Settings</p>
                <Arrow size={30}/>
            </BoxConfig>
        </Card>
    );
}

export default CardContext;