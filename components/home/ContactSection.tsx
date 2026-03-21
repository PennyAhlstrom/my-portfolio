import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  return (
    <Section variant="plain">
      <Container>
        <div className="max-w-2xl">
          <SectionHeader>Get in Touch</SectionHeader>

          <Text className="mt-4 text-muted">
            If you're interested in collaborating, discussing a project, or
            learning more about my work, I would be happy to connect.
          </Text>

          <div className="mt-8">
            <Button href="/contact" variant="secondary" theme="light">
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}