import fundoMain from "../../assets/img/fundo-main.jpg";

import { handleScroll } from "../../Func/elderScroll";
import { textMain, textGuide, textPaint, textPlay } from "../../Data/text";
import { useRef } from "react";

import Link from "../../Components/Class/Link/Index";
import TextSection from "../../Components/Class/TextSection/Index";
import Input from "../../Components/Class/Input/Index";

function Home() {
  const guide = useRef(null);
  const paint = useRef(null);
  const play = useRef(null);

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

            <li>
              <Input value="Como Jogar" func={handleScroll} scrollRef={play} />
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
          linkName="Introdução ao Hobby"
        />

        <TextSection
          scrollRef={paint}
          sectionTitle="Como Pintar"
          sectionText={textPaint}
        />
        <Link
          link="https://www.youtube.com/watch?v=4KNkOPTa_po"
          linkName="Pintando suas Minis"
        />

        <TextSection
          scrollRef={play}
          sectionTitle="Como Jogar"
          sectionText={textPlay}
        />
        <Link
          link="https://www.youtube.com/watch?v=7z5f0d1VO1Q"
          linkName="Jogando o Jogo"
        />
      </main>
    </>
  );
}

export default Home;
