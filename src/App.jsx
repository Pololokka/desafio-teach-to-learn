import "./App.css";
import fundoMain from "./assets/img/fundo-main.jpg";

import { textMain } from "./Data/text";

import Link from "./Components/Class/Link/Index";
import TextSection from "./Components/Class/TextSection/Index";

function App() {
  return (
    <>
      <header>
        <nav className="nav-bar">
          <Link
            link="https://www.youtube.com/watch?v=4KNkOPTa_po"
            linkName="Como Pintar"
          />
          <Link
            link="https://www.youtube.com/watch?v=M6M9-oFEKpk"
            linkName="Guia Introdutório"
          />
          <Link
            link="https://www.youtube.com/watch?v=7z5f0d1VO1Q"
            linkName="Como Jogar"
          />
        </nav>
      </header>
      <main className="main__container">
        <img src={fundoMain} className="test" />
        <h1 className="title">
          NA ESCURIDÃO DO FUTURO DISTANTE EXISTE APENAS GUERRA.
        </h1>
        <TextSection sectionTitle="Título" sectionText={textMain} />
      </main>
    </>
  );
}

export default App;
