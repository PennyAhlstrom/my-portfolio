import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function Accomplishments() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <SectionHeader>Accomplishments</SectionHeader>
        <Text className="mt-4 max-w-3xl">
          Accomplishments content goes here.
        </Text>
      </Container>
    </Section>
  );
}