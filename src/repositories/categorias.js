import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAllVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}
export default {
  getAllVideos,
};
