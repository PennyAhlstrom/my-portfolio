import Image from "next/image";
import { notFound } from "next/navigation";
import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import AppLink from "@/components/ui/AppLink";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";
import TechBadge from "@/components/tech/TechBadge";
import { techIcons } from "@/components/tech/techIcons";
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
    <Section variant="plain">
      <Container>
        <AppLink href="/projects" arrow direction="back" variant="muted">
          Back to All Projects
        </AppLink>

        <div className="mt-4">
          <SectionHeader>{project.title}</SectionHeader>
        </div>

        <Text className="mt-4 max-w-3xl text-muted">{project.description}</Text>

        {project.images && project.images.length > 0 && (
          <div className="mt-10">
            <div
              className={`grid gap-4 ${
                project.images.length === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 md:grid-cols-2"
              }`}
            >
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-sm"
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((item) => {
            const Icon = techIcons[item];

            return (
              <TechBadge
                key={item}
                icon={Icon ? <Icon size={12} /> : undefined}
              >
                {item}
              </TechBadge>
            );
          })}
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