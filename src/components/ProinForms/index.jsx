import React, { useState } from 'react';
import {
    ProinLabel,
    ProinLabelButton,
    ProinFormCadastrar, 
    ProinInput, 
    ProinSubmitButton,
    EmailIcon,
    UserIcon,
    LockPasswordIcon,
    ArrowheadRightOutlineIcon,
    EyeIcon,
    EyeWithLineIcon,
    ButtonShowPassword,
} from './styles';

export const ProinForms = ({children}) => {

    const handleSubmit = event => {
        event.preventDefault();
    }

    return(
        <ProinFormCadastrar onSubmit={handleSubmit} >
            {children}
        </ProinFormCadastrar>
    );
}

export const ProinInputEmail = () => {

    const [inputValue, setinputValue] = useState('');

    const handleInputEmail = event => {
        setinputValue(event.target.value);
    }

    return (
        <ProinLabel border={inputValue.length}>
            <EmailIcon size={20} />
            <ProinInput
                placeholder="Digite seu email"
                type="email"
                name="email"
                id="email"
                autocomplete="off"
                value={inputValue} 
                onChange={handleInputEmail} 
            />
        </ProinLabel>
    );
}

export const ProinInputNome = () => {

    const [inputValue, setinputValue] = useState('');

    const handleInputNome = event => {
        setinputValue(event.target.value);
    }

    return (
        <ProinLabel border={inputValue.length}>
            <UserIcon size={20} />
            <ProinInput
                placeholder="Digite seu nome"
                type="text"
                name="nome"
                id="nome"
                autocomplete="off"
                value={inputValue} 
                onChange={handleInputNome} 
            />
        </ProinLabel>
    );
}

export const ProinInputSenha = () => {

    const [inputValue, setinputValue] = useState('');
    const [showPassword, setShowPassword] = useState('password');

    const handleInputSenha = event => {
        setinputValue(event.target.value);
    }

    const handleShowPassword = () => {
        if (showPassword === 'password') {
            setShowPassword('text');
            return;
        }
        setShowPassword('password')
    }

    const changeIconEyePassword = () => {
        if (showPassword === 'password') {
            return <EyeIcon size={20} /> 
        }
        return <EyeWithLineIcon size={20} />
    }
    
    return (
        <ProinLabel border={inputValue.length}>
            <LockPasswordIcon size={20} />
            <ProinInput
                placeholder="Digite sua senha"
                type={showPassword}
                name="password"
                id="password"
                value={inputValue} 
                onChange={handleInputSenha} 
            />
            <ButtonShowPassword onClick={handleShowPassword}>
                {changeIconEyePassword()}
            </ButtonShowPassword>
        </ProinLabel>
    );
}

export const ProinInputSubmit = () => {
    return (
        <ProinLabelButton for="submit">
            <ProinSubmitButton 
                type="submit"
                value="Enviar"
                id="submit"
            />
            <ArrowheadRightOutlineIcon size={20} />
        </ProinLabelButton>
    );
}