import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function Accomplishments() {
  return (
        <Section variant="plain">
      <Container>
        <div className="max-w-3xl">
          <SectionHeader>Accomplishments & Awards</SectionHeader>

          <Text className="mt-4 text-muted">
            Dean’s Honour List — Achieved for five consecutive terms at George Brown Polytechnic
            <br />
            Thesis Prize Nomination — Recognized for graduate research at York University
          </Text>
        </div>
      </Container>
    </Section>
  );
}