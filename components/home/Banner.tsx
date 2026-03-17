import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import Text from "@/components/ui/Text";

export default function Banner() {
  return (
   <Section variant="plain" className="pt-24 pb-16 md:pt-28 md:pb-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl font-semibold tracking-[-0.03em] text-foreground sm:text-6xl">
            Penny Ahlstrom
          </h1>

          <Text className="mt-6 max-w-2xl text-muted">
            Software developer focused on building practical solutions that improve
            workflows, solve real problems, and make technology easier to use.
          </Text>
        </div>
      </Container>
    </Section>
  );
}