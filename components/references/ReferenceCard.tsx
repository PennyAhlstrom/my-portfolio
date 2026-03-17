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
      <Text className="text-muted">{description}</Text>

      <div className="mt-6 flex justify-end">
        <AppLink href={href} arrow variant="dark">
          View Reference
        </AppLink>
      </div>
    </Card>
  );
}