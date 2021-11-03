import styled from 'styled-components';
import { Email } from '@styled-icons/entypo/Email';
import { User } from '@styled-icons/entypo/User';
import { Eye } from '@styled-icons/entypo/Eye';
import { EyeWithLine } from '@styled-icons/entypo/EyeWithLine';
import { LockPassword } from '@styled-icons/remix-fill/LockPassword';
import { ArrowheadRightOutline } from '@styled-icons/evaicons-outline/ArrowheadRightOutline';

// icones
export const EmailIcon = styled(Email)`

`;

export const UserIcon = styled(User)`

`;

export const LockPasswordIcon = styled(LockPassword)`

`;

export const ArrowheadRightOutlineIcon = styled(ArrowheadRightOutline)`
    transition: 0.5s;
`;

export const EyeIcon = styled(Eye)`
    cursor: pointer;
`;

export const EyeWithLineIcon = styled(EyeWithLine)`
    cursor: pointer;
`;

export const ProinInput = styled.input`
    width: 100%;
    padding: 5px;

    // resets
    outline: none;
    border: none;

    font-size: 16px;
`;

export const ProinLabel = styled.label`
    display: flex;
    align-items: center;

    width: 400px;
    margin-bottom: 5px;
    border: ${({ border }) => border > 20 ? "3px solid red": "3px solid white"};
    border-radius: 5px;
    background-color: white;
    padding: 3px;
`;

export const ProinFormCadastrar = styled.form`
    display: flex;
    flex-direction: column;
`;

export const ProinSubmitButton = styled.input.attrs({

})`
    padding: 5px;
    font-size: 16px;
    border: none;
    background-color: white;
    cursor: pointer;
    transition: 0.5s;
`;

export const ProinLabelButton = styled(ProinLabel)`
    justify-content: space-around;

    width: 100px;
    padding: 0;
    
    border-radius: 5px;
    
    cursor: pointer;
    
    &:hover ${ArrowheadRightOutlineIcon} {
        transform: translateX(3px);
        color: red;
    }

    &:hover ${ProinSubmitButton} {
        color: red;
    }
`;

export const ButtonShowPassword = styled.button`
    border: none;

    background-color: white;
`;