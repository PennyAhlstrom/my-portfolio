import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function Biography() {
  return (
    <Section>
      <Container>
        <SectionHeader variant="light">Biography</SectionHeader>
        <Text variant="light" className="mt-4 max-w-3xl">
          Biography content goes here.
        </Text>
      </Container>
    </Section>
  );
}