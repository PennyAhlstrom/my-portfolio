import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";
import ProjectGrid from "@/components/projects/ProjectGrid";

export default function ProjectsIntro() {
  return (
    <Section variant="plain">
      <Container>
        <SectionHeader>Projects</SectionHeader>

        <Text className="mt-4 max-w-3xl">
          This page highlights selected projects demonstrating my work in
          software development, machine learning, and interface design.
        </Text>

        <ProjectGrid />
      </Container>
    </Section>
  );
}