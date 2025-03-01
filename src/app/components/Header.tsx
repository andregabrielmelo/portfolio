import Link from "next/link";

import Logo from "./Logo";

import { ThemeToggle } from "@/app/components/ThemeToggle";

export default function Header({ className }: { className?: string }) {
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
                    <ThemeToggle />
                </nav>
            </header>
        </>
    );
}
