// import ContactDetailsSection from "@/components/contact/ContactDetailsSection";

// export default function ContactPage() {
//   return (
//     <>
//       <ContactDetailsSection />
//     </>
//   );
// }


import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";
import AppLink from "@/components/ui/AppLink";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const sectionVariant = "light"  // I'm doing this to easily change the styling for the entire page
                                //  instead of useContext since there is just one level of props
                                //  so prop drilling is not really a concern

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <SectionHeader variant={sectionVariant}>Contact</SectionHeader>

        <Text variant={sectionVariant} className="mt-4 max-w-xl">
          If you'd like to collaborate, discuss a project, or learn more about my
          work, feel free to reach out.
        </Text>

        <div className="mt-8 space-y-4">

          <AppLink
            href="mailto:your.email@example.com"
            external
            className="flex items-center gap-3"
            variant="muted"
          >
            <MdEmail className="text-lg" />
            your.email@example.com
          </AppLink>

          <AppLink
            href="https://github.com/yourusername"
            external
            className="flex items-center gap-3"
            variant="muted"
          >
            <FaGithub className="text-lg" />
            GitHub
          </AppLink>

          <AppLink
            href="https://linkedin.com/in/yourusername"
            external
            className="flex items-center gap-3"
            variant="muted"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </AppLink>

        </div>
      </Container>
    </Section>
  );
}