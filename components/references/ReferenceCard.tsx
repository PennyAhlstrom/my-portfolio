import Card from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import AppLink from "@/components/ui/AppLink";

type ReferenceCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ReferenceCard({
  title,
  description,
  href,
}: ReferenceCardProps) {
  return (
    <Card title={title} variant="light">
      <Text>{description}</Text>

      <div className="mt-4">
        <AppLink href={href} arrow>
          View Reference
        </AppLink>
      </div>
    </Card>
  );
}