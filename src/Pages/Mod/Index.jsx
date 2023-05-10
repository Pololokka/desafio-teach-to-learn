import React from "react";
import fundoMod from "../../assets/img/fundo-mod.jpg";

import { textPageMod } from "../../Data/text";

import { Link } from "react-router-dom";
import TextSection from "../../Components/Class/TextSection/Index";

class Mod extends React.Component {
  render() {
    document.title = "Warhammer 40K - Modificando suas Miniaturas";

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
                <Link className="text text-hover link" to="/jogar">
                  Jogando o Jogo
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main__container">
          <img src={fundoMod} className="bg-img" />
          <h1 className="title">MODIFICANDO SUAS MINIATURAS</h1>

          <iframe
            width="50%"
            height="420px"
            src="https://www.youtube.com/embed/cPGREvAnA6w"
            title="YouTube video player"
            frameBorder="10px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <iframe
            width="50%"
            height="420px"
            src="https://www.youtube.com/embed/aBk1qA02SKY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <iframe
            width="50%"
            height="420px"
            src="https://www.youtube.com/embed/LrgdapjKOCg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <iframe
            width="50%"
            height="420px"
            src="https://www.youtube.com/embed/grc4WD51Whg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <TextSection sectionTitle="Sobre" sectionText={textPageMod} />
        </main>
      </>
    );
  }
}

export default Mod;
