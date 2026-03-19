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
            I believe software development is fundamentally about solving real problems 
            in a way that is both effective and accessible. At its best, technology should simplify complexity, 
            reduce friction, and empower people to focus on what truly matters 
            rather than on the tools they use.
            <br />
            My approach to development is grounded in three principles: problem-solving, efficiency, 
            and intuitive design. I am drawn to challenges where systems can be improved, 
            processes streamlined, or insights uncovered from data. Whether building data-driven applications 
            or designing user interfaces, I focus on creating solutions that are not only technically sound 
            but also practical and easy to use.
            <br />
            Efficiency is especially important to me. I am motivated by opportunities to reduce manual effort, 
            automate repetitive tasks, and design workflows that save time and minimize error. At the same time, 
            I believe that efficiency should never come at the cost of usability. A well-designed system should feel 
            natural to the user, requiring little explanation and supporting their goals seamlessly.
            <br />
            Ultimately, I see software development as a way to bridge complexity and clarity. My goal is to 
            build systems that are thoughtful, reliable, and genuinely useful—tools that make work easier, 
            decisions clearer, and experiences better.
          </Text>
        </div>
      </Container>
    </Section>
  );
}