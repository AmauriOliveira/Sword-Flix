import React from 'react';

import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

function Page404() {
    return (
        <PageDefault>
            <h1>
              Página não encontrada
            </h1>
            <Link to="/">
                Voltar para home
            </Link>
        </PageDefault>
    )
}

export default Page404;