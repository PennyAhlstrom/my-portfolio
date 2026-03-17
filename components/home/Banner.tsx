import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import Text from "@/components/ui/Text";
import Image from "next/image";

export default function Banner() {
  return (
   <Section variant="plain" className="pt-24 pb-16 md:pt-28 md:pb-20">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
          
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-48 h-64 md:w-56 md:h-72 overflow-hidden rounded-xl">
              <Image
                src="/images/profile.jpg"
                alt="Penny Ahlstrom"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-border self-stretch" />

          {/* Text Content */}
          <div className="mt-10 md:mt-0 max-w-3xl">
            <h1 className="font-serif text-5xl font-semibold tracking-[-0.03em] text-foreground sm:text-6xl">
              Penny Ahlstrom
            </h1>

            <Text className="mt-6 max-w-2xl text-muted">
              Software developer focused on building practical solutions that improve
              workflows, solve real problems, and make technology easier to use.
            </Text>
          </div>

        </div>
      </Container>
    </Section>
  );
}