import React from "react";
import fundoGuide from "../../assets/img/fundo-guide.jpg";

import { Link } from "react-router-dom";
import { textPageGuide } from "../../Data/text";
import TextSection from "../../Components/Class/TextSection/Index";

class Guide extends React.Component {
  render() {
    document.title = "Warhammer 40K - Guia Introdutório";

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
                <Link className="text text-hover link" to="/pintar">
                  Como Pintar
                </Link>
              </li>

              <li className="border-right">
                <Link className="text text-hover link" to="/jogar">
                  Jogando o Jogo
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
          <img src={fundoGuide} className="bg-img" />
          <h1 className="title">GUIA INTRODUTÓRIO</h1>

          <iframe
            width="50%"
            height="420px"
            src="https://www.youtube.com/embed/M6M9-oFEKpk"
            title="YouTube video player"
            frameBorder="10px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <TextSection sectionTitle="Sobre" sectionText={textPageGuide} />
        </main>
      </>
    );
  }
}

export default Guide;
