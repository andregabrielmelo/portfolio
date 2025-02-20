import Header from "./components/Header";
import Cards from "./components/Cards";

import { data } from "./db";

export default function Home() {
  const frontend = data.filter((tech) => tech.type === "frontend");
  const backend = data.filter((tech) => tech.type === "backend");
  const tools = data.filter((tech) => tech.type === "tool");

  return (
    <>
      <Header></Header>
      <main className="mx-4">
        <section>
          <h1 className="text-4xl">André Melo</h1>
          <p>
            Cursando a faculdade e focado em desenvolvimento web. Buscando
            oportunidades para projetos interessantes!
          </p>
        </section>
        <section className="flex flex-col gap-3">
          <h1 className="title">Tecnologias mais utilizadas</h1>
          <h3 className="subtitle">Bakcend-end</h3>
          <Cards cards={backend} />
          <h3 className="subtitle">Front-end</h3>
          <Cards cards={frontend} />
          <h3 className="subtitle">Tools</h3>
          <Cards cards={tools} />
        </section>
        <section>
          <h1 className="title">Recent Projects</h1>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
