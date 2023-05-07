import React from "react";
import "./Styles.css";
import fundoError from "../../../assets/img/fundo-error.jpg";

import { Link } from "react-router-dom";
import { textError } from "../../../Data/text";
import { inquisitionTexts } from "../../../Data/errorTexts";
import TextSection from "../TextSection/Index";

const maxNumber = 70;

class ErrorPage extends React.Component {
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

        <main className="main__container ">
          <img src={fundoError} className="bg-img" />
          <h1 className="title">ESCÓRIA HEREGE!</h1>

          <div className="error__board">
            <TextSection
              sectionTitle="Você está tentando acessar conteúdo não sancionado pela Inquisição e pelo Sagrado Imperador!"
              sectionText={textError}
            />
            <p className="subtitle text-hover">
              {inquisitionTexts[Math.ceil(Math.random() * maxNumber)]}
            </p>
          </div>
        </main>
      </>
    );
  }
}

export default ErrorPage;
