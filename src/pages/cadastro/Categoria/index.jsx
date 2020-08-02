import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValue = {
    name: '',
    description: '',
    color: '#000000',
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
  useEffect(() => {
    setTimeout(() => {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (response) => {
          const data = await response.json();
          setCategoria([
            ...data,
          ]);
        });
    }, 1 * 1000);
  }, []);
  return (
    <PageDefault>
      <h1>
        Cadastrar Categoria:
        {` ${values.name}`}
      </h1>

      <form onSubmit={HandleFormSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
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

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.id}`}>
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
