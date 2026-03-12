import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function Awards() {
  return (
    <Section>
      <Container>
        <SectionHeader variant="light">Awards</SectionHeader>
        <Text variant="light" className="mt-4 max-w-3xl">
          Awards content goes here.
        </Text>
      </Container>
    </Section>
  );
}