import { notFound } from "next/navigation";
import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import AppLink from "@/components/ui/AppLink";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";
import TechBadge from "@/components/tech/TechBadge";
import { demos } from "@/components/demos/DemoData";

type DemoPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return demos.map((demo) => ({
    slug: demo.slug,
  }));
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;

  const demo = demos.find((item) => item.slug === slug);

  if (!demo) {
    notFound();
  }

  return (
    <Section>
      <Container>
        <AppLink href="/demos" arrow direction="back" variant="muted">
          Back to All Demos
        </AppLink>

        <div className="mt-4">
          <SectionHeader>{demo.title}</SectionHeader>
        </div>

        <Text className="mt-4 max-w-3xl">{demo.description}</Text>

        <div className="mt-6 flex flex-wrap gap-2">
          {demo.tech.map((item) => (
            <TechBadge key={item}>{item}</TechBadge>
          ))}
        </div>

        {/* <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <iframe
            src={demo.videoUrl}
            title={demo.title}
            className="aspect-video w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div> */}

        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="aspect-video w-full">
            <iframe
              src={demo.videoUrl}
              title={demo.title}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <Text className="mt-8 max-w-3xl">{demo.content}</Text>
      </Container>
    </Section>
  );
}