import fundoMain from "../../assets/img/fundo-main.jpg";

import { handleScroll } from "../../Func/elderScroll";
import {
  textMain,
  textGuide,
  textPaint,
  textPlay,
  textMod,
} from "../../Data/text";
import { useRef } from "react";

import { Link } from "react-router-dom";
import TextSection from "../../Components/Class/TextSection/Index";
import Input from "../../Components/Class/Input/Index";

function Home() {
  const guide = useRef(null);
  const paint = useRef(null);
  const play = useRef(null);
  const mod = useRef(null);

  document.title = "Introdução ao 40K";

  return (
    <>
      <header>
        <nav>
          <ul className="nav-bar">
            <p className="text">Seções: </p>

            <li className="border-right">
              <Input
                value="Guia Introdutório"
                func={handleScroll}
                scrollRef={guide}
              />
            </li>

            <li className="border-right">
              <Input
                value="Como Pintar"
                func={handleScroll}
                scrollRef={paint}
              />
            </li>

            <li className="border-right">
              <Input value="Como Jogar" func={handleScroll} scrollRef={play} />
            </li>

            <li>
              <Input
                value="Modificando Miniaturas"
                func={handleScroll}
                scrollRef={mod}
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
        <Link className="text text-hover link" to="/guia">
          Introdução ao Hobby
        </Link>

        <TextSection
          scrollRef={paint}
          sectionTitle="Como Pintar"
          sectionText={textPaint}
        />
        <Link className="text text-hover link" to="/pintar">
          Introdução à Pintura
        </Link>

        <TextSection
          scrollRef={play}
          sectionTitle="Como Jogar"
          sectionText={textPlay}
        />
        <Link className="text text-hover link" to="/jogar">
          Jogando o Jogo
        </Link>

        <TextSection
          scrollRef={mod}
          sectionTitle="Modificando Miniaturas"
          sectionText={textMod}
        />
        <Link className="text text-hover link" to="/modificar">
          Modificando suas Miniaturas
        </Link>
      </main>
    </>
  );
}

export default Home;
