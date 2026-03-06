import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="flex flex-col gap-4 py-6 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Penny Ahlstrom. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <Link href="/projects" className="transition hover:text-black">
            Projects
          </Link>
          <Link href="/resume" className="transition hover:text-black">
            Resume
          </Link>
          <Link href="/contact" className="transition hover:text-black">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}