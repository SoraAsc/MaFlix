import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain

        videoTitle={dadosIniciais.categorias[4].videos[0].titulo}
        url={dadosIniciais.categorias[4].videos[0].url}
        videoDescription="Último trailer do jogo Final Fantasy VII Remake no qual se tem como protagonista Cloud Strife. "
      // Oque é Front-end? Trabalhando na área os termos HTML,CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem afinal? Descubra com a Vanessa!
      />

      <Carousel

        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />
      <Carousel
        category={dadosIniciais.categorias[5]}
      />
      <Carousel
        category={dadosIniciais.categorias[6]}
      />
      <Footer />
    </div>
  );
}

export default Home;
