import Text from "@/components/ui/Text";

type TechBadgeProps = {
  children: React.ReactNode;
};

export default function TechBadge({ children }: TechBadgeProps) {
  return (
    <span className="inline-flex rounded-full bg-gray-100 px-3 py-1">
      <Text as="span" variant="muted" className="text-sm">
        {children}
      </Text>
    </span>
  );
}