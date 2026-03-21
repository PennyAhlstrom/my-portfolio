import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function Degrees() {
  return (
    <Section variant="light">
      <Container>
        <div className="max-w-3xl">
          <SectionHeader>Degrees & Diplomas</SectionHeader>
          <SectionHeader as="h3" size="small">Advanced Diploma — Computer Programming and Analysis</SectionHeader>
          <Text className="mt-4 text-muted">
            George Brown Polytechnic, Toronto | 2023 – Present
          </Text>
          <SectionHeader as="h3" size="small">Master of Science — Cell Biology</SectionHeader>
          <Text className="mt-4 text-muted">
            York University, Toronto | 2012 – 2015
          </Text>
        </div>
      </Container>
    </Section>
  );
}