import React from "react";
import fundoPlay from "../../assets/img/fundo-play.jpg";

import { textPagePlay } from "../../Data/text";

import { Link } from "react-router-dom";
import TextSection from "../../Components/Class/TextSection/Index";

class Play extends React.Component {
  render() {
    document.title = "Warhammer 40K - Jogando o Jogo";

    return (
      <>
        <header>
          <nav>
            <ul className="nav-bar">
              <p className="text">Páginas: </p>

              <li className="border-right">
                <Link className="text text-hover link" to="/">
                  Home
                </Link>
              </li>

              <li className="border-right">
                <Link className="text text-hover link" to="/guia">
                  Guia Introdutório
                </Link>
              </li>

              <li className="border-right">
                <Link className="text text-hover link" to="/pintar">
                  Como Pintar
                </Link>
              </li>

              <li>
                <Link className="text text-hover link" to="/modificar">
                  Modificando suas Miniaturas
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main__container">
          <img src={fundoPlay} className="bg-img" />
          <h1 className="title">JOGANDO O JOGO</h1>

          <iframe
            width="50%"
            height="420px"
            src="https://www.youtube.com/embed/7z5f0d1VO1Q"
            title="YouTube video player"
            frameBorder="10px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <iframe
            width="50%"
            height="420px"
            src="https://www.youtube.com/embed/taUqZCiijvU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <TextSection sectionTitle="Sobre" sectionText={textPagePlay} />
        </main>
      </>
    );
  }
}

export default Play;
