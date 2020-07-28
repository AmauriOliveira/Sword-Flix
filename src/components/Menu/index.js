import React from 'react';

import Logo from '../../assents/img/Logo.svg';
import Button from '../Button';
//import ButtonLink from '../Menu/components/ButtonLink';
import './Style.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo da Sword Flix" />
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;