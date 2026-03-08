import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

export default function ContactSection() {
  return (
    <Section className="py-20 bg-gray-50">
      <Container>
        <SectionHeader>Get in Touch</SectionHeader>
        {/* <h2 className="text-2xl font-semibold">Get in Touch</h2> */}

        <p className="mt-4 max-w-xl text-gray-700">
          If you're interested in collaborating, discussing a project, or learning
          more about my work, I would be happy to connect.
        </p>

        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-black px-5 py-3 text-white hover:bg-gray-800"
          >
            Contact Me
          </Link>
        </div>
      </Container>
    </Section>
  );
}