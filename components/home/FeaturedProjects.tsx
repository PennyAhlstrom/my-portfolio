import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import AppLink from "@/components/ui/AppLink"
import { projects } from "@/components/projects/ProjectData";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);
  
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
          {featuredProjects.map((project) => (
            <Card
              key={project.slug}
              title={project.title}
              variant="light"
              href={`/projects/${project.slug}`}
              image={project.images?.[0]?.src}
              imageAlt={project.images?.[0]?.alt}
            >
              <Text className="text-muted">{project.description}</Text>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}