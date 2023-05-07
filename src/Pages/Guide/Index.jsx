import React from "react";
import fundoGuide from "../../assets/img/fundo-guide.jpg";

import { Link } from "react-router-dom";
import { textPageGuide } from "../../Data/text";
import Input from "../../Components/Class/Input/Index";
import TextSection from "../../Components/Class/TextSection/Index";

document.title = "Warhammer 40K - Guia Introdutório";

class Guide extends React.Component {
  render() {
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
                <Input value="Como Pintar" />
              </li>

              <li>
                <Input value="Como Jogar" />
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
            frameborder="10px"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <TextSection sectionTitle="Sobre" sectionText={textPageGuide} />
        </main>
      </>
    );
  }
}

export default Guide;
