import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import AppLink from "@/components/ui/AppLink"

export default function FeaturedProjects() {
  return (
    <Section>
      <Container>
        <div className="flex items-center justify-between">
          {/* <h2 className="text-2xl font-semibold">Featured Projects</h2> */}
        <SectionHeader variant="light">Featured Projects</SectionHeader> 

          <AppLink
            href="/projects"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            View all projects →
          </AppLink>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
           <Card
              title="Gomoku AI"
              variant="light"
              href="/projects/gomoku-ai"
              image="/images/gomoku-ai.jpg"
              imageAlt="Screenshot of Gomoku AI project"
           >
            <Text className="mt-3">
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
            <Text className="mt-3">
              Professional portfolio built with Next.js and Tailwind to showcase
              projects, research, and technical experience.
            </Text>
          </Card>
        </div>
      </Container>
    </Section>
  );
}