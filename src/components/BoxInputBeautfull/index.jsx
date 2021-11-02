import React from 'react';
import {
    InputMain, 
    LabelMain,
    SearchStyles,
    BoxInputBeautfull,
    ResultSearch,
    SearchResultProperty,
} from './styles';

const BoxInputBeautfullProperty = () => {
    return (
        <BoxInputBeautfull>
        <LabelMain htmlFor="seach-core">
            <SearchStyles />
            <InputMain id="seach-core" />
        </LabelMain>
        <ResultSearch>
            <li><SearchResultProperty size={40} />Diretorios</li>
            <li><SearchResultProperty size={40} />Diretorios</li>
        </ResultSearch>
        </BoxInputBeautfull>
    );
}

export default BoxInputBeautfullProperty;
