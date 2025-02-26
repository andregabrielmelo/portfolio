import Link from "next/link";

import { buttonVariants } from "./ui/button";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer({ className }: { className?: string }) {
    const buttonClasses = "transition-all";

    return (
        <footer
            className={className || "flex py-4 items-center max-w-5xl mx-auto"}
        >
            <p>&#169; 2025 André Melo</p>
            <div className="flex gap-2 ml-auto">
                <Link
                    href="mailto:andregabrielmelo@gmail.com"
                    className={buttonVariants({
                        variant: "ghost",
                        className: buttonClasses,
                        size: "icon",
                    })}
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
                >
                    <Github size={24} />
                </Link>

                <Link
                    href="https://www.linkedin.com/in/andre-gabriel-melo/"
                    className={buttonVariants({
                        variant: "ghost",
                        className: buttonClasses,
                        size: "icon",
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Linkedin size={24} />
                </Link>
            </div>
        </footer>
    );
}
