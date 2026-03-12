
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "./Container";
import AppLink from "@/components/ui/AppLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/demos", label: "Demos" },
  { href: "/references", label: "References" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActivePath = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      <Container className="min-h-16 py-4">
        <div className="flex items-center justify-between">
          <AppLink
            href="/"
            className="text-lg font-semibold tracking-tight text-gray-900 hover:text-black"
          >
            Penny Ahlstrom
          </AppLink>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = isActivePath(link.href);

              return (
                <AppLink
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? "!text-black border-b-2 border-black pb-1"
                      : "border-b-2 border-transparent pb-1"
                  }
                >
                  {link.label}
                </AppLink>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="text-base">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {menuOpen && (
          <nav className="mt-4 flex flex-col gap-3 border-t border-gray-200 pt-4 md:hidden">
            {navLinks.map((link) => {
              const isActive = isActivePath(link.href);

              return (
                <AppLink
                  key={link.href}
                  href={link.href}
                  className={isActive ? "!text-black font-semibold" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </AppLink>
              );
            })}
          </nav>
        )}
      </Container>
    </header>
  );
}