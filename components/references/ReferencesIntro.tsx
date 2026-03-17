import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";
import ReferenceGrid from "@/components/references/ReferenceGrid";

export default function ReferencesIntro() {
  return (
    <Section variant="plain">
      <Container>
        <div className="max-w-3xl">
          <SectionHeader>References</SectionHeader>

          <Text className="mt-4 text-muted">
            This page includes references and recommendation letters related to
            my academic and professional work.
          </Text>
        </div>

        <ReferenceGrid />
      </Container>
    </Section>
  );
}