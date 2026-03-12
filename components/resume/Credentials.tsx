import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function Credentials() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <SectionHeader>Credentials</SectionHeader>

        <Text className="mt-4 max-w-3xl">
          Credentials, certifications, and related information will go here.
        </Text>
      </Container>
    </Section>
  );
}