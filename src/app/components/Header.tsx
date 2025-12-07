import Link from "next/link";

import { buttonVariants } from "./ui/button";

import { Mail } from "lucide-react";
import { Github } from "./logos/Github";
import { Linkedin } from "./logos/Linkedin";

import Logo from "./Logo";

import { ThemeToggle } from "@/app/components/ThemeToggle";

export default function Header({ className }: { className?: string }) {
    const buttonClasses = "transition-all";

    return (
        <>
            <header
                className={
                    className ||
                    "flex justify-between items-center p-8 sticky top-0 transition-all backdrop-blur-xs bg-gradient-to-b from-(--color-background) via-(--color-background) via-35% to-(--color-background)/5"
                }
            >
                <Link href="/" title="Vá para a Home Page">
                    <Logo className="text-foreground w-6" />
                </Link>
                <nav className="flex gap-3 items-center">
                    {/* <ul className="flex gap-3">
                        <li>
                            <Link
                                className="text-muted-foreground hover:underline hover:underline-offset-4"
                                href="/about"
                            >
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-muted-foreground hover:underline hover:underline-offset-4"
                                href="/projects"
                            >
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-muted-foreground hover:underline hover:underline-offset-4"
                                href="/hobbies"
                            >
                                Hobbies
                            </Link>
                        </li> 
                    </ul> */}
                    <div className="flex gap-2 ml-auto">
                        <Link
                            href="mailto:andregabrielmelo@gmail.com"
                            className={buttonVariants({
                                variant: "ghost",
                                className: buttonClasses,
                                size: "icon",
                            })}
                            title="E-mail"
                        >
                            <Mail size={24} />
                        </Link>

                        <Link
                            href="https://github.com/andregabrielmelo"
                            className={buttonVariants({
                                variant: "ghost",
                                className: buttonClasses,
                                size: "icon",
                            })}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Github"
                        >
                            <Github />
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/andre-de-melo/"
                            className={buttonVariants({
                                variant: "ghost",
                                className: buttonClasses,
                                size: "icon",
                            })}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Linkedin"
                        >
                            <Linkedin />
                        </Link>
                    </div>
                    <div className="h-6 w-px mx-2 bg-primary" />
                    <ThemeToggle />
                </nav>
            </header>
        </>
    );
}
