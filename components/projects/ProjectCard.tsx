import Card from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import TechBadge from "@/components/projects/TechBadge";

type ProjectCardProps = {
  title: string;
  slug: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({
  title,
  slug,
  description,
  tech,
}: ProjectCardProps) {
  return (
    <Card title={title} href={`/projects/${slug}`} variant="light">
      <Text>{description}</Text>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <TechBadge key={item}>{item}</TechBadge>
        ))}
      </div>
    </Card>
  );
}