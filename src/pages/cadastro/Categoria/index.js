/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import { TableTR /* , TableTD */ } from './styles';

function CadastroCategoria() {
  const table = {
    borderCollapse: 'collapse',
    width: '80%',
    marginTop: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const tableth = {
    paddingTop: '12px',
    paddingBottom: '12px',
    textAlign: 'center',
    backgroundColor: 'blue',
    color: 'white',

  };

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

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

  const loadcasos = (
    <table style={table}>
      <tbody>
        <tr>
          <th style={tableth}>Categorias</th>
          <th style={tableth}>Descrição</th>
          <th style={tableth}>Cor</th>
          <th style={tableth}>Remove</th>
        </tr>
      </tbody>
      {categorias.map((categoria) => (
        <tbody key={`${categoria.titulo}_key${categoria.cor}`}>
          <TableTR fieldColor={categoria.cor}>
            <td style={{ border: `2px solid ${categoria.cor}`, padding: '8px', textAlign: 'center' }}>
              {categoria.titulo}
            </td>
            <td style={{ border: `2px solid ${categoria.cor}`, padding: '8px', textAlign: 'center' }}>
              {categoria.descricao}
            </td>
            <td style={{ border: `2px solid ${categoria.cor}`, padding: '8px', textAlign: 'center' }}>
              {categoria.cor}
            </td>
            <td style={{ border: `2px solid ${categoria.cor}`, padding: '8px', textAlign: 'center' }}>
              <button
                style={{ width: '100%', backgroundColor: `${categoria.cor}` }}
                type="button"
                onClick={() => categoriasRepository.handleDelete(categoria.id)}
              >
                {' '}
                Remove
              </button>
            </td>
          </TableTR>
        </tbody>
      ))}
    </table>
  );

  return (
    <PageDefault paddingAll={0}>

      <Link to="/">
        Ir para Home
      </Link>

      <div style={{ textAlign: 'center' }}>
        <h1>
          Cadastro de Categoria:
          {values.titulo}
        </h1>
        <div style={{ display: 'inline-block', justifyContent: 'center' }}>
          <form onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            setCategorias([
              ...categorias,
              values,
            ]);

            categoriasRepository.create({
              titulo: values.titulo,
              descricao: values.descricao,
              cor: values.cor,
            });
            clearForm(valoresIniciais);
          }}
          >

            <FormField
              label="Nome da Categoria"
              type="text"
              name="titulo"
              value={values.titulo}
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
      {loadcasos}

    </PageDefault>
  );
}

export default CadastroCategoria;
