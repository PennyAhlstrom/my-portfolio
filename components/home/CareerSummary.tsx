import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function CareerSummary() {
  return (
    <Section variant="light">
      <Container>
        <SectionHeader>Career Summary</SectionHeader>

        <ul className="mt-8 space-y-4 pl-5 marker:text-muted">
          <Text as="li" className="text-muted">
            Reduced projected API costs by 82% by replacing paid services with
            open-source alternatives.
          </Text>

          <Text as="li" className="text-muted">
            Built machine learning models achieving over 90% test accuracy on
            classification tasks.
          </Text>

          <Text as="li" className="text-muted">
            Developed full-stack applications using the MERN stack supporting
            CRUD operations and authentication.
          </Text>

          <Text as="li" className="text-muted">
            Designed user-friendly interfaces that improved workflow efficiency
            for project users.
          </Text>

          <Text as="li" className="text-muted">
            Created AI-driven projects integrating Python, TensorFlow, and data
            analysis tools.
          </Text>
        </ul>
      </Container>
    </Section>
  );
}