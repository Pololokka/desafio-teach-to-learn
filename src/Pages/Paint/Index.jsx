import React from "react";

import { Link } from "react-router-dom";

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
      </>
    );
  }
}

export default Paint;
