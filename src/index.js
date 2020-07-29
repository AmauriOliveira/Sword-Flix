import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import CadastrarVideo from './pages/cadastro/Video';
import CadastrarCategoria from './pages/cadastro/Categoria';
import Page404 from './pages/Page404';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro/categoria" component={CadastrarCategoria} />
        <Route path="/cadastro/video" exact component={CadastrarVideo} />
        <Route component={Page404} /> {/*404 */}
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,

  document.getElementById('root')
);