import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function Skills() {
  return (
    <Section>
      <Container>
        <SectionHeader variant="light">Skills</SectionHeader>
        <Text variant="light" className="mt-4 max-w-3xl">
          Skills content goes here.
        </Text>
      </Container>
    </Section>
  );
}