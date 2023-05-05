import "./App.css";
import fundoMain from "./assets/img/fundo-main.jpg";

import { textMain, textGuide } from "./Data/text";
import { useRef } from "react";

import Link from "./Components/Class/Link/Index";
import TextSection from "./Components/Class/TextSection/Index";

function App() {
  const guide = useRef(null);
  const paint = useRef(null);
  const play = useRef(null);
  const test = useRef();

  const handleScroll = ({ elementRef = event.target.id }) => {
    //const elementRef = event.target.id;
    console.log(elementRef);
    window.scrollTo({
      top: elementRef,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header>
        <nav>
          <ul className="nav-bar">
            <li>
              <input
                type="button"
                value="Guia Introdutório"
                className="text text-hover btn__nav"
                id="guide"
                onClick={handleScroll}
              />
            </li>
            <li>
              <input
                type="button"
                value="Como Pintar"
                className="text text-hover btn__nav"
              />
            </li>
            <li>
              <input
                type="button"
                value="Como Jogar"
                className="text text-hover btn__nav"
              />
            </li>
          </ul>
        </nav>
      </header>
      <main className="main__container">
        <img src={fundoMain} className="bg-img" />
        <h1 className="title">
          NA ESCURIDÃO DO FUTURO DISTANTE EXISTE APENAS GUERRA.
        </h1>
        <TextSection sectionTitle="O Mundo de 40K" sectionText={textMain} />

        <TextSection
          scrollRef={guide}
          sectionTitle="Guia Introdutório"
          sectionText={textGuide}
        />
        <Link
          link="https://www.youtube.com/watch?v=M6M9-oFEKpk"
          linkName="Guia Introdutório"
        />

        <TextSection
          scrollRef={paint}
          sectionTitle="Como Pintar"
          sectionText={textGuide}
        />
        <Link
          link="https://www.youtube.com/watch?v=4KNkOPTa_po"
          linkName="Como Pintar"
        />

        <TextSection
          scrollRef={play}
          sectionTitle="Como Jogar"
          sectionText={textGuide}
        />
        <Link
          link="https://www.youtube.com/watch?v=7z5f0d1VO1Q"
          linkName="Como Jogar"
        />
        <div ref={test}>
          <p>teste</p>
        </div>
      </main>
    </>
  );
}

export default App;
