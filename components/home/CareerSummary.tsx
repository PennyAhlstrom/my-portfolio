import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function CareerSummary() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <SectionHeader variant="dark">Career Summary</SectionHeader>
        {/* <h2 className="text-2xl font-semibold">Career Summary</h2> */}

         <ul className="mt-6 space-y-3 list-disc pl-6">
          <Text as="li" variant="dark">
            Reduced projected API costs by 82% by replacing paid services with
            open-source alternatives.
          </Text>

          <Text as="li" variant="dark">
            Built machine learning models achieving over 90% test accuracy on
            classification tasks.
          </Text>

          <Text as="li" variant="dark">
            Developed full-stack applications using the MERN stack supporting
            CRUD operations and authentication.
          </Text>

          <Text as="li" variant="dark">
            Designed user-friendly interfaces that improved workflow efficiency
            for project users.
          </Text>

          <Text as="li" variant="dark">
            Created AI-driven projects integrating Python, TensorFlow, and data
            analysis tools.
          </Text>
        </ul>
      </Container>
    </Section>
  );
}