import React, { useRef, useState } from "react";

import {
    NavBar,
    CustomerButtons,
    CustomerButtonsAnimation, 
    ControlUserAction, 
    ControlSideBar,
    Configs,
    UserOptions,
    ArrowSideBarMove,
} from './styles';

import Logo from '../Logo';
import CardContext from "../CardContext";
import { useSelector, useDispatch } from "react-redux";
import { useOutsideClick } from "../../utils/OnClickOut";
import BoxInputBeautfullProperty from "../BoxInputBeautfull";

const changeCongigData = (obj, show, size) => {
    return {
        type: 'CONFIG',
        config: Object.assign({}, obj, { show, size }),
    }
}

const NavBarPropperty = () => {
       
    const configData = useSelector(state => state.sideBarReducer);
    const dispatch = useDispatch()
    
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef();
    
    function changeShowHide(value) {
        if(value) {
            dispatch(changeCongigData(configData.controlSideBar, false, 100));
            return;
        }
        dispatch(changeCongigData(configData.controlSideBar, true, 80));
    }
    
    useOutsideClick(isOpen, ref, () => setIsOpen(false));
    
    return (
        <NavBar width={configData.controlSideBar.size}>
            <ControlSideBar>
                <CustomerButtonsAnimation 
                    deg={configData.controlSideBar.show ? 180 : 360} 
                    onClick={() => changeShowHide(configData.controlSideBar.show)}
                >
                    <ArrowSideBarMove size={25}/>
                </CustomerButtonsAnimation>
                <Logo width="36%" opacity={configData.controlSideBar.show ? 0 : 1} />
            </ControlSideBar>
            <BoxInputBeautfullProperty />
            <UserOptions>
                <CustomerButtons
                    onClick={() => setIsOpen(true)}
                    isOpen={isOpen}
                    ref={ref}
                >
                    <Configs size={25} isOpen={isOpen}/>
                    <CardContext display={isOpen ? 'block': 'none'}>
                    </CardContext>
                </CustomerButtons>
                <ControlUserAction>
                    <img src={configData.usersInfo.photoPerfil} alt="" />
                    <p>{configData.usersInfo.nome}</p>
                </ControlUserAction>
            </UserOptions>
        </NavBar>
    )
}

export default NavBarPropperty;