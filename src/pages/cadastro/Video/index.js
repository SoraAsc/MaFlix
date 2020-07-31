/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const { handleChange, values } = useForm({
    titulo: 'Validação',
    url: 'https://www.youtube.com/watch?v=-nYNd6EuZHU&t',
    categoria: 'Back End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categorias) => {
        setCategorias(categorias);
      });
  }, []);
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>
      <div style={{ display: 'inline-block', justifyContent: 'center' }}>
        <form onSubmit={(event) => {
          event.preventDefault();

          const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          }).then(() => {
            history.push('/');
          });
        }}
        >
          <FormField
            label="Titulo do Vídeo"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="URL do Vídeo"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Categoria"
            type="select"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />
          <Button style={{ color: 'black' }}>
            Cadastrar
          </Button>
        </form>
        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </div>
    </PageDefault>
  );
}

export default CadastroVideo;
