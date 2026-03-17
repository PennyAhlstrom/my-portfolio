import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import AppLink from "@/components/ui/AppLink"

export default function FeaturedProjects() {
  return (
    <Section variant="light">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SectionHeader>Featured Projects</SectionHeader>

          <AppLink href="/projects" arrow variant="dark">
            View all projects
          </AppLink>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2">
          <Card
            title="Gomoku AI"
            variant="light"
            href="/projects/gomoku-ai"
            image="/images/gomoku-ai.jpg"
            imageAlt="Screenshot of Gomoku AI project"
          >
            <Text className="text-muted">
              Java implementation of the Gomoku board game with an AI opponent
              using search algorithms and heuristic evaluation.
            </Text>
          </Card>

          <Card
            title="Portfolio Website"
            variant="light"
            href="/projects/portfolio-website"
            image="/images/portfolio-website.jpg"
            imageAlt="Screenshot of portfolio website"
          >
            <Text className="text-muted">
              Professional portfolio built with Next.js and Tailwind to showcase
              projects, research, and technical experience.
            </Text>
          </Card>
        </div>
      </Container>
    </Section>
  );
}