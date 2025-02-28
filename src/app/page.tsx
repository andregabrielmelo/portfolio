import Link from "next/link";

import Cards from "@/app/components/Cards";
import { buttonVariants } from "@/app/components/ui/button";

import { SquareArrowOutUpRight } from "lucide-react";

import { technologies } from "./db/technologies";

export default function Home() {
    const languages = technologies.filter((tech) => tech.type === "language");
    const frameworks = technologies.filter((tech) => tech.type === "framework");
    const dbms = technologies.filter((tech) => tech.type === "dbms");
    const tools = technologies.filter((tech) => tech.type === "tool");

    return (
        <>
            <section className="flex flex-col justify-center gap-4 py-8">
                <div className="flex justify-between pb-4">
                    <h1 className="font-extrabold text-4xl">André Melo</h1>
                    <Link
                        href="files/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({
                            className:
                                "w-28 flex justify-center text-1xl !font-bold items-center",
                            size: "icon",
                        })}
                        title="Veja meu currículo em outra página"
                    >
                        Currículo
                        <SquareArrowOutUpRight />
                    </Link>
                </div>
                <p>
                    Sou um estudante de 20 anos do curso de graduação em ciência
                    da computação. Adoro criar coisas e resolver problemas.
                    Focado em desenvolvimento web. Se não estiver programando,
                    provavelmente estarei jogando, lendo, na academia ou
                    assistindo filmes.
                </p>
                <p>
                    Sempre buscando oportunidades para projetos interessantes!
                </p>
            </section>
            <section className="flex flex-col gap-3 py-8">
                <h1 className="text-xl font-bold">Tecnologias utilizadas</h1>

                <h3 className="text-muted-foreground">Linguagens</h3>
                <Cards
                    cards={languages}
                    className={
                        "grid gap-4 max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-4 my-2"
                    }
                />

                <h3 className="text-muted-foreground">Frameworks</h3>
                <Cards
                    cards={frameworks}
                    className={
                        "grid gap-4 max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-4 my-2"
                    }
                />

                <h3 className="text-muted-foreground">DBMS</h3>
                <Cards
                    cards={dbms}
                    className={
                        "grid gap-4 max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-4 my-2"
                    }
                />

                <h3 className="text-muted-foreground">Ferramentas</h3>
                <Cards
                    cards={tools}
                    className={
                        "grid gap-4 max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-4 my-2"
                    }
                />
            </section>
            <section className="flex flex-col gap-3 py-8" id="projects">
                <h1 className="text-xl font-bold">Projetos</h1>
                <div className="grid gap-4 max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3">
                    <div className="flex flex-col gap-1">
                        <h4 className="text-muted-foreground underline underline-offset-4">
                            Anime Manager
                        </h4>
                        <p>
                            Website para procurar animes e montar listas como
                            eles
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
