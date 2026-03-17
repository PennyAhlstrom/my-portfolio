import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function Accomplishments() {
  return (
        <Section variant="light">
      <Container>
        <div className="max-w-3xl">
          <SectionHeader>Accomplishments</SectionHeader>

          <Text className="mt-4 text-muted">
            Accomplishments content goes here.
          </Text>
        </div>
      </Container>
    </Section>
  );
}