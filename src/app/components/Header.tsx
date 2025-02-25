import { Github, Linkedin, Mail } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";

export default function Header() {
    const buttonClasses = "bg-transparent border-none transition-all";
    return (
        <>
            <header className="flex p-3 gap-4 sticky top-0 hover:backdrop-blur-xl backdrop-blur-sm transition-all">
                <Link href="/" className="flex justify-center">
                    <Image
                        src="favicon.svg"
                        alt="Logo"
                        width={24}
                        height={24}
                    />
                </Link>
                <nav className="flex gap-3 items-center">
                    <ul className="flex gap-3">
                        <li>
                            <a className="font-bold" href="#">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a className="font-bold" href="#">
                                Projetos
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex gap-2 ml-auto">
                    <Link
                        href="mailto:andregabrielmelo@gmail.com"
                        className={buttonVariants({
                            variant: "outline",
                            className: buttonClasses,
                            size: "icon",
                        })}
                    >
                        <Mail size={24} />
                    </Link>

                    <Link
                        href="https://github.com/andregabrielmelo"
                        className={buttonVariants({
                            variant: "outline",
                            className: buttonClasses,
                            size: "icon",
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github size={24} />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/andre-gabriel-melo/"
                        className={buttonVariants({
                            variant: "outline",
                            className: buttonClasses,
                            size: "icon",
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin size={24} />
                    </Link>
                </div>
            </header>
        </>
    );
}
