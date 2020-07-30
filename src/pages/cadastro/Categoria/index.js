/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    // chave: nome, descricao, cor
    setValues({
      ...values,
      [key]: value, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    const { value } = infosDoEvento.target;
    setValue(
      infosDoEvento.target.getAttribute('name'),
      value,
    );
  }
  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://maflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (res) => {
        const resposta = await res.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);
  return (
    <PageDefault>

      <Link to="/">
        Ir para Home
      </Link>

      <div style={{ textAlign: 'center' }}>
        <h1>
          Cadastro de Categoria:
          {values.nome}
        </h1>
        <div style={{ display: 'inline-block', justifyContent: 'center' }}>
          <form onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            setCategorias([
              values,
              ...categorias,
            ]);

            setValues(valoresIniciais);
          }}
          >

            <FormField
              label="Nome da Categoria"
              type="text"
              name="nome"
              value={values.nome}
              onChange={handleChange}
            />

            <FormField
              label="Descrição"
              type="number"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />

            <div>
              <input
                style={{
                  height: '40px', width: '100%', marginBottom: '5px', background: 'none',
                }}
                type="color"
                name="cor"
                value={values.cor}
                onChange={handleChange}
              />
            </div>

            <Button style={{ color: 'black' }}>
              Cadastrar
            </Button>

          </form>
        </div>
      </div>
      {categorias.length === 0 && (
      <div style={{ color: 'white' }}>
        Loading...
      </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
            {' - Descrição: '}
            {categoria.descricao}
            {' - Cor: '}
            {categoria.cor}
          </li>
        ))}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
