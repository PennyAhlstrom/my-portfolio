import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

export default function ResumeViewer() {
  return (
    <Section>
      <Container>
        <SectionHeader>Resume</SectionHeader>

        <Text className="mt-4 max-w-3xl">
          You can view or download my resume below.
        </Text>

        <div className="mt-6">
          <Button href="/resume.pdf" theme="light">
            View Resume
          </Button>
        </div>
      </Container>
    </Section>
  );
}