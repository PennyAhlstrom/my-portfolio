import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import DemoCard from "@/components/demos/DemoCard";
import { demos } from "@/components/demos/DemoData";

export default function DemoGrid() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          {demos.map((demo) => (
            <DemoCard
              key={demo.slug}
              title={demo.title}
              slug={demo.slug}
              description={demo.description}
              tech={demo.tech}
            />
          ))}
          </div>
      </Container>
    </Section>
  );
}