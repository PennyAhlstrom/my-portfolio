import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function Credentials() {
  return (
    <Section variant="light">
      <Container>
        <div className="max-w-3xl">
          <SectionHeader>Credentials</SectionHeader>

          <Text className="mt-4 text-muted">
            Credentials, certifications, and related information will go here.
          </Text>
        </div>
      </Container>
    </Section>
  );
}