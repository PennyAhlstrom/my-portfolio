import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function Philosophy() {
  return (
    <Section variant="plain">
      <Container>
        <div className="max-w-3xl">
          <SectionHeader>Philosophy</SectionHeader>

          <Text className="mt-4 text-muted">
            Philosophy content goes here.
          </Text>
        </div>
      </Container>
    </Section>
  );
}