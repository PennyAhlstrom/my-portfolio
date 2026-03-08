type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2 className={`text-2xl font-semibold tracking-tight text-gray-900 ${className}`}>
      {children}
    </h2>
  );
}