import React from 'react';
import {
  ProinForms,
  ProinInputEmail,
  ProinInputNome,
  ProinInputSenha,
  ProinInputSubmit,
} from '../../components/ProinForms';

const ProinFormPage = () => (
  <ProinForms>
    <ProinInputEmail />
    <ProinInputNome />
    <ProinInputSenha />
    <ProinInputSubmit />
  </ProinForms>
);

export default ProinFormPage;
