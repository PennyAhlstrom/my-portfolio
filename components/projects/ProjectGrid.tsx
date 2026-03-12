import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/components/projects/ProjectData";

export default function ProjectGrid() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
           {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              slug={project.slug}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}