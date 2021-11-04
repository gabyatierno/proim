import React from "react";
import { ProinForms, 
    ProinInputEmail, 
    ProinInputNome, 
    ProinInputSenha, 
    ProinInputSubmit 
} from "../../components/ProinForms";

const ProinFormPage = () => {
    return(
        <ProinForms>
            <ProinInputEmail />
            <ProinInputNome />
            <ProinInputSenha />
            <ProinInputSubmit />
        </ProinForms>
    );
}

export default ProinFormPage;