import Container from "./Container";
import AppLink from "@/components/ui/AppLink"
import Text from "@/components/ui/Text"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Container>
          <div className="flex flex-col gap-4 py-6
           md:flex-row md:items-center md:justify-between">

          <Text variant="muted">
            © {new Date().getFullYear()} Penny Ahlstrom
          </Text>

          <div className="flex items-center gap-6">
            <AppLink
              href="https://github.com/PennyAhlstrom"
              external
              variant="muted"
            >
              GitHub
            </AppLink>

            <AppLink
              href="https://linkedin.com/in/PennyAhlstrom"
              external
              variant="muted"
            >
              LinkedIn
            </AppLink>

            <AppLink href="/contact" variant="muted">
              Contact
            </AppLink>
          </div>

        </div>
      </Container>
    </footer>
  )
}