import Link from "next/link";
import Container from "./Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/references", label: "References" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <Container className="flex min-h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gray-900"
        >
          Penny Ahlstrom
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}