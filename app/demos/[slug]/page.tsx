import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";

type DemoPageProps = {
  params: {
    slug: string;
  };
};

export default function DemoPage({ params }: DemoPageProps) {
  return (
    <Section>
      <Container>
        <SectionHeader>{params.slug}</SectionHeader>

        <Text className="mt-4 max-w-3xl">
          Demo detail page content goes here.
        </Text>
      </Container>
    </Section>
  );
}