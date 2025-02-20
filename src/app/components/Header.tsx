import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "./ui/button";

export default function Header() {
  const buttonClasses = "bg-transparent border-none transition-all";
  return (
    <>
      <header className="sticky top-0 hover:backdrop-blur-xl backdrop-blur transition-all">
        <nav className="flex gap-3 items-center p-3">
          <span className="font-black text-2xl text-blue-800">André Melo</span>
          <ul className="flex gap-3">
            <li>
              <a className="font-bold" href="#">
                Projects
              </a>
            </li>
            <li>
              <a className="font-bold" href="#">
                About Me
              </a>
            </li>
          </ul>
          <div className="flex gap-2 ml-auto">
            <a
              href="https://github.com/andregabrielmelo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={buttonClasses} variant="outline" size="icon">
                <Github size={24} />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/andre-gabriel-melo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={buttonClasses} variant="outline" size="icon">
                <Linkedin size={24} />
              </Button>
            </a>
            <a href="mailto:andregabrielmelo@gmail.com">
              <Button className={buttonClasses} variant="outline" size="icon">
                <Mail size={24} />
              </Button>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
