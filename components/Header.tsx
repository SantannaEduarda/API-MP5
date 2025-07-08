'use client';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-4">
      <nav className="flex justify-center gap-8 text-indigo-700 font-semibold text-sm">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer hover:text-indigo-500"
        >
          Início
        </ScrollLink>
        <ScrollLink
          to="cursos"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer hover:text-indigo-500"
        >
          Cursos
        </ScrollLink>
        <ScrollLink
          to="materiais"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer hover:text-indigo-500"
        >
          Materiais
        </ScrollLink>
      </nav>
    </header>
  );
}
