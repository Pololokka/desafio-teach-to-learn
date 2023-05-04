import "./App.css";

import Link from "./Components/Class/Link/Index";

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
        <h1 className="title">
          NA ESCURIDÃO DO FUTURO DISTANTE EXISTE APENAS GUERRA.
        </h1>
      </main>
    </>
  );
}

export default App;
