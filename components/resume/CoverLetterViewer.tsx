import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

export default function CoverLetterViewer() {
  return (
    <Section variant="plain">
      <Container>
        <div className="max-w-3xl">
          <SectionHeader>Cover Letter</SectionHeader>

          <Text className="mt-4 text-muted">
            You can view or download my cover letter below.
          </Text>

          <div className="mt-8">
            <Button
              href="/resume.pdf"
              variant="primary"
              theme="light"
              external
              newTab
            >
              View Cover Letter
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}