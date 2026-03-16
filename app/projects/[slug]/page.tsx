import { notFound } from "next/navigation";
import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import AppLink from "@/components/ui/AppLink";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";
import TechBadge from "@/components/projects/TechBadge";
import { projects } from "@/components/projects/ProjectData";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Section>
      <Container>
        <AppLink href="/projects" arrow direction="back" variant="muted">
          Back to All Projects
        </AppLink>

        <div className="mt-4">
          <SectionHeader>{project.title}</SectionHeader>
        </div>

        <Text className="mt-4 max-w-3xl">{project.description}</Text>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <TechBadge key={item}>{item}</TechBadge>
          ))}
        </div>

        <div className="mt-6">
          <AppLink href={project.githubUrl} external newTab arrow>
            View on GitHub
          </AppLink>
        </div>

        <Text className="mt-8 max-w-3xl">{project.content}</Text>
      </Container>
    </Section>
  );
}