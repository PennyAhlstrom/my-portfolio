import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import DemoCard from "@/components/demos/DemoCard";

export default function DemoGrid() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <DemoCard
            title="Gomoku AI Demo"
            slug="gomoku-ai-demo"
            description="Video demonstration of the Gomoku AI project, including gameplay and search-based decision making."
            tech={["Java", "AI", "Demo"]}
          />

          <DemoCard
            title="Portfolio Website Demo"
            slug="portfolio-website-demo"
            description="Walkthrough of the portfolio website structure, reusable components, and responsive layout."
            tech={["Next.js", "Tailwind", "Demo"]}
          />
        </div>
      </Container>
    </Section>
  );
}