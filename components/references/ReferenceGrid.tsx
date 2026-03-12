import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import ReferenceCard from "@/components/references/ReferenceCard";

export default function ReferenceGrid() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <ReferenceCard
            title="Reference Letter"
            description="Recommendation from an instructor describing academic performance and technical strengths."
            href="/references/reference-letter.pdf"
          />

          <ReferenceCard
            title="Professional Reference"
            description="Reference highlighting collaboration, work ethic, and project contributions."
            href="/references/professional-reference.pdf"
          />
        </div>
      </Container>
    </Section>
  );
}