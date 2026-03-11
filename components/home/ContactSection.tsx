import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
//import Link from "next/link";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <SectionHeader variant="dark">Get in Touch</SectionHeader>
        {/* <h2 className="text-2xl font-semibold">Get in Touch</h2> */}

        <p className="mt-4 max-w-xl text-gray-700">
          If you're interested in collaborating, discussing a project, or learning
          more about my work, I would be happy to connect.
        </p>

        <Text className="mt-4 max-w-xl">
          If you're interested in collaborating, discussing a project, or
          learning more about my work, I would be happy to connect.
        </Text>

        <div className="mt-6">
          <Button href="/contact" theme="light">
            Contact Me
          </Button>
        </div>
      </Container>
    </Section>
  );
}