/* eslint-disable linebreak-style */
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function create(objCategoria) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objCategoria),
  })
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

function handleDelete(id) {
  return fetch(`${URL_CATEGORIES}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(async (res) => {
      if (res.ok) {
        const resposta = await res.json();
        return resposta;
      }
      throw new Error('Não foi possível deletar esse dado :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
  handleDelete,
};
