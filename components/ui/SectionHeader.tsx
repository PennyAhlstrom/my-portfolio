type SectionHeadingProps = {
  children: React.ReactNode;
  variant?: "light" | "dark" | "muted"; // current options for variants - can be expanded
  size?: "section" | "sub" | "small";
  as?: "h2" | "h3" | "h4"; //The type of heading is passed as a prob so this can be used for any headixgns needed throughout the site
  className?: string;
};

export default function SectionHeading({
  children,
  variant = "dark", // Dark is default if no variant is specified
  size = "section",
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {

  // Explicitly define each variant to keep the code scalable
  const variants = {
    light: "text-white",
    dark: "text-foreground",
    muted: "text-muted",
  };

  // Size variants for different headings
  const sizes = {
    section: "text-3xl md:text-4xl font-semibold mb-6",
    sub: "text-2xl md:text-3xl font-semibold mb-4",
    small: "text-xl md:text-2xl font-medium mb-3",
  };

  const color = variants[variant];
  const sizeClass = sizes[size];

  return (
    // Responsive size
    <Tag 
      // className={`font-serif text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-6 ${color} ${className}`}
      className={`font-serif tracking-[-0.02em] ${sizeClass} ${color} ${className}`}
    >
      {children}
    </Tag>
  );
}