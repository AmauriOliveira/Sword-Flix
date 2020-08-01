import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValue = {
    name: '',
    description: '',
    color: '',
  };

  const [categorias, setCategoria] = useState([]);
  const [values, setValues] = useState(initialValue);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function HandleFormSubmit(event) {
    event.preventDefault();
    setCategoria([
      ...categorias,
      values,
    ]);
    setValues(initialValue);
  }

  return (
    <PageDefault>
      <h1>
        Cadastrar Categoria:
        {` ${values.name}`}
      </h1>

      <form onSubmit={HandleFormSubmit}>

        <FormField
          label="Nome da Categoria"
          type="tex"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
