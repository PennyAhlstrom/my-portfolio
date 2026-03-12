import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectGrid() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectCard
            title="Gomoku AI"
            slug="gomoku-ai"
            description="Java implementation of the Gomoku board game with an AI opponent using search algorithms and heuristic evaluation."
            tech={["Java", "AI", "Search Algorithms"]}
          />

          <ProjectCard
            title="Portfolio Website"
            slug="portfolio-website"
            description="Professional portfolio built with Next.js and Tailwind to showcase projects, research, and technical experience."
            tech={["Next.js", "Tailwind", "React"]}
          />
        </div>
      </Container>
    </Section>
  );
}