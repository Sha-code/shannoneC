import React from 'react';
import HomeStyled from './HomeStyled';
import presentation from '../../assets/images/presentation.jpeg';

const Home = () => (
  <HomeStyled>
    <article>
      <h1 className="title">Web developer</h1>
      <p>
        Hello ! I'm Shannone and you are seeing my porfolio website made with React.
      </p>
      <p>Hope you will enjoy the tour.</p>
      <a href="./cv-english.pdf" download>Download my CV in english</a>
      <a href="./cv-french.pdf" download>Download my CV in french</a>
    </article>
    <img src={presentation} alt="Me" />
  </HomeStyled>
);

export default Home;
