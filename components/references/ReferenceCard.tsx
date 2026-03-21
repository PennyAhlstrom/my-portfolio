import Card from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import AppLink from "@/components/ui/AppLink";
import { actionIcons } from "@/components/icons/actionIcons";

const OpenIcon = actionIcons.view;

type ReferenceCardProps = {
  title: string;
  description: string;
  author?: string;
  href: string;
};

export default function ReferenceCard({
  title,
  description,
  author,
  href,
}: ReferenceCardProps) {
  return (
    <Card title={title} variant="light">
  {/* Author */}
   {author && (
    <div className="mt-2 pb-3 border-b border-border">
      <Text className="mt-1 text-muted">
        {author}
      </Text>
    </div>
  )}

  {/* Description */}
  <Text className="mt-4 text-muted">
    {description}
  </Text>
      <div className="mt-6 flex justify-end">
        <AppLink
          href={href}
          external
          newTab
          arrow
          variant="dark"
        >
           <OpenIcon className="inline-block text-base" />
          View Reference
        </AppLink>
      </div>
    </Card>
  );
}