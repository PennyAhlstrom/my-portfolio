import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

export default function ResumeViewer() {
  return (
    <Section variant="plain">
      <Container>
        <div className="max-w-3xl">
          <SectionHeader>Resume</SectionHeader>

          <Text className="mt-4 text-muted">
            You can view or download my resume below.
          </Text>

          <div className="mt-8">
            <Button
              href="/resume.pdf"
              variant="primary"
              theme="light"
              external
              newTab
            >
              View Resume
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}