import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function ReferencesIntro() {
  return (
    <Section>
      <Container>
        <SectionHeader>References</SectionHeader>

        <Text className="mt-4 max-w-3xl">
          This page includes references and recommendation letters related to
          my academic and professional work.
        </Text>
      </Container>
    </Section>
  );
}