import Container from "./Container";
import AppLink from "@/components/ui/AppLink"
import Text from "@/components/ui/Text"
import { actionIcons } from "@/components/icons/actionIcons";

const GitHubIcon = actionIcons.github;
const LinkedInIcon = actionIcons.linkedin;
const EmailIcon = actionIcons.email;

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Container>
          <div className="flex flex-col gap-4 py-6
           md:flex-row md:items-center md:justify-between">

          <Text variant="muted">
            © {new Date().getFullYear()} Penny Ahlstrom
          </Text>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <AppLink
              href="mailto:your.email@example.com"
              icon={<EmailIcon size={14} />}
              variant="muted"
            >
              Email
            </AppLink>

            <AppLink
              href="https://github.com/PennyAhlstrom"
              external
              icon={<GitHubIcon size={14} />}
              variant="muted"
            >
              GitHub
            </AppLink>

            <AppLink
              href="https://linkedin.com/in/PennyAhlstrom"
              external
              icon={<LinkedInIcon size={14} />}
              variant="muted"
            >
              LinkedIn
            </AppLink>
          </div>

        </div>
      </Container>
    </footer>
  );
}