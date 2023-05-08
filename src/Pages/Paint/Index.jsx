import React from "react";
import fundoPaint from "../../assets/img/fundo-paint.png";

import { textPagePaint } from "../../Data/text";

import { Link } from "react-router-dom";
import TextSection from "../../Components/Class/TextSection/Index";

class Paint extends React.Component {
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
                <Link className="text text-hover link" to="/guia">
                  Guia Introdutório
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main__container">
          <img src={fundoPaint} className="bg-img" />

          <iframe
            width="50%"
            height="420px"
            src="https://www.youtube.com/embed/4KNkOPTa_po"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            width="50%"
            height="420px"
            src="https://www.youtube.com/embed/hLRSCV6N1IU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <TextSection sectionTitle="Sobre" sectionText={textPagePaint} />
        </main>
      </>
    );
  }
}

export default Paint;
