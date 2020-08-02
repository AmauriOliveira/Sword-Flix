import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import Load from '../../../components/Load';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValue = {
    title: '',
    description: '',
    color: '#000000',
  };

  const { values, handleChange, cleanForm } = useForm(initialValue);

  const [categorias, setCategoria] = useState([]);

  function HandleFormSubmit(event) {
    event.preventDefault();
    setCategoria([
      ...categorias,
      values,
    ]);
    cleanForm();
  }

  useEffect(() => {
    setTimeout(() => {
      const URL = window.location.href.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://sword-flix.herokuapp.com/categorias';
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
        {` ${values.title}`}
      </h1>
      <form onSubmit={HandleFormSubmit}>

        <FormField
          label="Titulo da Categoria"
          type="text"
          name="title"
          value={values.title}
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
        <Load />
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.id}`}>
            {categoria.title}
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
