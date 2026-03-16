type SectionProps = {
  children: React.ReactNode
  className?: string
  variant?: "default" | "surface" | "dark";
}

export default function Section({ 
  children,
  className = "",
  variant = "default", 
}: SectionProps) {

  const variants = {
    default: "bg-background text-foreground",
    surface: "bg-surface text-foreground",
    dark: "bg-foreground text-white",
  };

  return (
    <section className={`py-20 md:py-24 ${variants[variant]} ${className}`}>
      {children}
    </section>
  );
}