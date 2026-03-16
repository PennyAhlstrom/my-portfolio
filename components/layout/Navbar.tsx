
"use client";

import { useState } from "react";
import Image from "next/image";
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
    // <header className="border-b border-gray-200 bg-white"> // OG
    //  <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur"> // without shadow
    // <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur"> // without shadow
      <header className="sticky top-0 z-50 border-b border-border bg-white">
      <Container className="min-h-16 py-6">
        <div className="flex items-center justify-between">
          <AppLink
            href="/"
            // className="font-serif text-xl font-semibold tracking-[-0.02em] text-foreground no-underline hover:text-accent"
            className="flex items-center gap-3 font-serif text-xl font-semibold tracking-[-0.02em] text-foreground no-underline hover:text-accent"
          >
            <span className="relative h-8 w-8 overflow-hidden rounded-full border border-border bg-surface">
              <Image
                src="/profile.jpg"
                alt="Penny Ahlstrom"
                fill
                className="object-cover"
                sizes="36px"
                priority
              />
            </span>

            <span>Penny Ahlstrom</span>
          </AppLink>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = isActivePath(link.href);

              return (
                <AppLink
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 text-sm tracking-[0.02em] no-underline transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-foreground after:transition-opacity after:duration-200 ${
                    isActive
                      ? "text-foreground after:opacity-100"
                      : "text-muted after:opacity-0 hover:text-foreground hover:after:opacity-100"
                  }`}
                >
                  {link.label}
                </AppLink>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground transition hover:border-foreground md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="text-base leading-none">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {menuOpen && (
          <nav className="mt-4 border-t border-border pt-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = isActivePath(link.href);
                
                return (
                  <AppLink
                    key={link.href}
                    href={link.href}
                    className={`relative inline-block w-fit pb-1 text-sm tracking-[0.02em] no-underline transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-foreground after:transition-opacity after:duration-200 ${
                      isActive
                        ? "font-medium text-foreground after:opacity-100"
                        : "text-muted after:opacity-0 hover:text-foreground hover:after:opacity-100"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </AppLink>
                );
              })}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}