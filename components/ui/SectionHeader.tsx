type SectionHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeader({
  children,
  className = "",
}: SectionHeaderProps) {
  return (
    <h2 className={`text-2xl font-semibold tracking-tight text-gray-900 ${className}`}>
      {children}
    </h2>
  );
}