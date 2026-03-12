import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function Philosophy() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <SectionHeader>Philosophy</SectionHeader>
        <Text className="mt-4 max-w-3xl">
          Philosophy content goes here.
        </Text>
      </Container>
    </Section>
  );
}