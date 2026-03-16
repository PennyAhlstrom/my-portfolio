import Card from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import TechBadge from "@/components/projects/TechBadge";

type DemoCardProps = {
  title: string;
  slug: string;
  description: string;
  tech: string[];
};

export default function DemoCard({
  title,
  slug,
  description,
  tech,
}: DemoCardProps) {
  return (
    <Card title={title} href={`/demos/${slug}`} variant="light">
      <Text className="text-muted">{description}</Text>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <TechBadge key={item}>{item}</TechBadge>
        ))}
      </div>
    </Card>
  );
}