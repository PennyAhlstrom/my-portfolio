type SectionProps = {
  children: React.ReactNode
  className?: string
  variant?: "plain" | "light" | "dark";
}

export default function Section({ 
  children,
  className = "",
  variant = "plain", // Appears directly on background unless something else is specified
}: SectionProps) {
 const variants = {
    plain: "",
    light: "rounded-[2rem] border border-border bg-panel shadow-sm",
    dark: "rounded-[2rem] border border-border bg-panel-dark shadow-sm",
  };

 return (
    <section className={`px-4 py-8 md:px-6 md:py-10 ${className}`}>
      <div className={variants[variant]}>
        <div className="py-16 md:py-20">
          {children}
        </div>
      </div>
    </section>
  );
}