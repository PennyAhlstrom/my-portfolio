import Card from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import TechBadge from "@/components/tech/TechBadge";
import { techIcons } from "@/components/tech/techIcons";

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
        {tech.map((item) => {
          const Icon = techIcons[item]

          return (
            <TechBadge
              key={item}
              icon={Icon ? <Icon size={12} /> : undefined}
            >
              {item}
            </TechBadge>
          )
        })}
      </div>
    </Card>
  );
}