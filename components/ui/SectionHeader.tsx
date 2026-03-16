type SectionHeadingProps = {
  children: React.ReactNode;
  variant?: "light" | "dark" | "muted"; // current options for variants - can be expanded
  className?: string;
};

export default function SectionHeading({
  children,
  variant = "dark", // Dark is default if no variant is specified
  className = "",
}: SectionHeadingProps) {

  // Explicitly define each variant to keep the code scalable
  const variants = {
    light: "text-white",
    dark: "text-foreground",
    muted: "text-muted",
  };

  const color = variants[variant];

  return (
    // Responsive size
    <h2 
      className={`font-serif text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-6 ${color} ${className}`}
    >
      {children}
    </h2>
  );
}