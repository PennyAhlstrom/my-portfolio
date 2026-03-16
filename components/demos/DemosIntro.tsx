import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";
import DemoGrid from "@/components/demos/DemoGrid";

export default function DemosIntro() {
  return (
    <Section variant="plain">
      <Container>
        <SectionHeader>Demos</SectionHeader>

        <Text className="mt-4 max-w-3xl">
          This page highlights video demonstrations of selected projects and technical work.
        </Text>
        <DemoGrid />
      </Container>
    </Section>
  );
}