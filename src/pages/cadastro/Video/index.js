import React from 'react';

import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastrarVideo() {
    return (
        <PageDefault>
            <h1>
                Cadastrar Video
            </h1>
            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastrarVideo;