type SectionHeadingProps = {
  children: React.ReactNode;
  variant?: "light" | "dark" | "muted"; // current options for variants - can be expanded
};

export default function SectionHeading({
  children,
  variant = "dark", // Dark is default if no variant is specified
}: SectionHeadingProps) {

  // Explicitly define each variant to keep the code scalable
  const variants = {
    light: "text-white",
    dark: "text-gray-900",
    muted: "text-gray-500",
  };

  const color = variants[variant];

  return (
    // Responsive size
    <h2 className={`text-2xl md:text-3xl font-semibold tracking-tight ${color}`}>
      {children}
    </h2>
  );
}