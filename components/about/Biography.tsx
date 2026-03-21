import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

export default function Biography() {
  return (
    <Section variant="plain">
      <Container>
        <div className="max-w-3xl">
          <SectionHeader>Biography</SectionHeader>

          <Text className="mt-4 text-muted">
            I am a software developer who focuses on building practical, well-structured solutions 
            that make complex tasks easier to manage. My work is centered around understanding the problem first
            —whether that means organizing messy data, improving inefficient workflows, 
            or designing systems that are intuitive for users. I aim to deliver solutions that are 
            not only technically sound, but also clear, reliable, and easy to use.
            <br />
            I bring a combination of analytical thinking and real-world problem-solving experience from 
            both my background in biological research and my work in software development. In research, 
            I collaborated with diverse teams and worked with complex datasets, which strengthened my ability 
            to approach problems methodically and communicate effectively. More recently, I have applied those 
            same skills to building data-driven applications and full-stack systems, where understanding user needs 
            and translating them into functional solutions is key.
            <br />
            What you can expect from working with me is a thoughtful and structured approach. I prioritize clarity, 
            efficiency, and usability—whether that means reducing manual processes through automation, 
            building clean and maintainable systems, or creating tools that users can navigate without friction. 
            I am motivated by delivering work that is not just complete, but genuinely useful.
          </Text>
        </div>
      </Container>
    </Section>
  );
}