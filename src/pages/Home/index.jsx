import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import PageDefault from '../../components/PageDefault';
import Carousel from '../../components/Carousel';
import Load from '../../components/Load';
import categoriasRepositories from '../../repositories/categorias';

function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    categoriasRepositories.getAllVideos()
      .then((data) => {
        console.log('====================================');
        console.log(dados.length);
        console.log('====================================');
        setDados(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dados.length === 0 && (<Load />)}
      {/*

      {dados.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dados[0].videos[0].titulo}
                url={dados[0].videos[0].url}
                videoDescription={dados[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dados[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })} */}

    </PageDefault>
  );
}

export default Home;
