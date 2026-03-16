import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/components/projects/ProjectData";

export default function ProjectGrid() {
  return (
    <div className="mt-10 grid gap-y-10 gap-x-8 md:grid-cols-2">
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
  );
}