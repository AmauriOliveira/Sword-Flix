import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assents/img/Logo.svg';
import Button from '../Button';
import './Style.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo da Sword Flix" />
      </Link>
      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
