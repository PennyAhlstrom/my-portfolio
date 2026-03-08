import Section from "@/components/ui/SectionWrapper"
import Container from "@/components/layout/Container";

export default function Banner() {
  return (
    <Section className="py-24">
      <Container>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Penny Ahlstrom
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-700">
          Software developer focused on building practical solutions that improve
          workflows, solve real problems, and make technology easier to use.
        </p>
      </Container>
    </Section>
  );
}