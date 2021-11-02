import React from "react";
import { useSelector } from "react-redux";

import { BoxSideBar, BoxMenu, Arrow } from './styles';
import Logo from '../Logo';

export const SideBar = () => {

    const configData = useSelector(state => state.sideBarReducer.controlSideBar);

    let showLogo = !configData.show ? 0 : 1;

    return (
        <BoxSideBar opacity={showLogo}>
            <Logo width="60" opacity={showLogo}/>
            <BoxMenu>
                <button>
                    <Arrow size={20}/>
                    <p>home</p>
                </button>
                <button>
                    <Arrow size={20}/>
                    <p>home</p>
                </button>
                <button>
                    <Arrow size={20}/>
                    <p>home</p>
                </button>
            </BoxMenu>
        </BoxSideBar>
    );
}