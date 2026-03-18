import Image from "next/image";
import Container from "./Container";
import AppLink from "@/components/ui/AppLink";

export default function SiteHeader() {
  return (
    <section className="border-b border-border bg-white">
      <Container className="min-h-16 py-6">
        <div className="relative flex items-center justify-between">

          <div className="flex items-center gap-3">

            {/* Profile image (rounded square) - made this logo for now - keep it this way? */}
            <AppLink
              href="/"
              className="relative h-7 w-7 overflow-hidden rounded-md border border-border bg-surface"
            >
              <Image
                src="/icons/favicon.png"
                alt="Penny Ahlstrom Logo"
                fill
                className="object-cover"
                sizes="40px"
                priority
              />
            </AppLink>

            {/* Vertical divider */}
            <div className="h-6 w-px bg-border" />

            {/* Name + quote */}
            <div className="flex items-center gap-4">
              <AppLink
                href="/"
                className="font-serif text-xl font-semibold tracking-[-0.02em] text-foreground no-underline hover:text-accent whitespace-nowrap"
              >
                Penny Ahlstrom
              </AppLink>
            </div>
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 px-4">
                <p className="whitespace-nowrap font-serif text-sm italic text-muted">
                    “Thoughtful systems, clear design, practical solutions that help people.”
                </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}