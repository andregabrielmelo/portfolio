import Image from "next/image";

import Header from "./components/Header";
import Cards from "./components/Cards";
import { Button } from "./components/ui/button";

import { SquareArrowOutUpRight } from "lucide-react";

import { technologies } from "./db/technologies";

export default function Home() {
    const languages = technologies.filter((tech) => tech.type === "language");
    const frameworks = technologies.filter((tech) => tech.type === "framework");
    const dbms = technologies.filter((tech) => tech.type === "dbms");
    const tools = technologies.filter((tech) => tech.type === "tool");

    return (
        <>
            <Header />
            <main className="mx-4">
                <section className="flex h-96 gap-8 items-center justify-center">
                    <Image
                        src="/selfie.jpeg"
                        alt="Selfie"
                        width={200}
                        height={200}
                        className="aspect-square size-72 border-white border-2"
                    />
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-black">André Melo</h1>
                        <p className="max-w-[30rem]">
                            Cursando a faculdade e focado em desenvolvimento
                            web. Buscando oportunidades para projetos
                            interessantes!
                        </p>
                        <a
                            href="files/Currículo.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="text-1xl font-semibold itemns-center">
                                Currículo
                                <SquareArrowOutUpRight />
                            </Button>
                        </a>
                    </div>
                </section>
                <section className="flex flex-col gap-3">
                    <h1 className="title">Tecnologias utilizadas</h1>
                    <h3 className="subtitle">Linguagens</h3>
                    <Cards cards={languages} />
                    <h3 className="subtitle">Frameworks</h3>
                    <Cards cards={frameworks} />
                    <h3 className="subtitle">DBMS</h3>
                    <Cards cards={dbms} />
                    <h3 className="subtitle">Ferramentas</h3>
                    <Cards cards={tools} />
                </section>
            </main>
            <footer className="flex justify-center p-4">
                <p>Website feito usando Nextjs</p>
            </footer>
        </>
    );
}
