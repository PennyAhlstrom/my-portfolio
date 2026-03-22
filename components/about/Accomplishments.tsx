import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";
import AppLink from "@/components/ui/AppLink";
import { actionIcons } from "@/components/icons/actionIcons";

const OpenIcon = actionIcons.view;
const DocumentIcon = actionIcons.document;

export default function Accomplishments() {
  return (
    <Section variant="plain">
      <Container>
        <div className="max-w-3xl">
          <SectionHeader>Accomplishments & Awards</SectionHeader>

          <div className="mt-8  space-y-1">
            <SectionHeader as="h3" size="small">Dean's Honours List</SectionHeader>
            <Text className="text-muted leading-snug">
              Made the Dean's Honours List for five consecutive terms at George Brown Polytechnic, an honour awarded those who achieved a GPA of 3.5 or higher.
            </Text>
            <span className="opacity-40">|</span>
              <AppLink href="/docs/dean-letter-f2023.pdf" external variant="muted">
                <DocumentIcon className="inline-block text-base" />
                Fall 2023
              </AppLink>
              <span className="opacity-40">|</span>
              <AppLink href="/docs/dean-letter-w2024.pdf" external variant="muted">
                <DocumentIcon className="inline-block text-base" />
                Winter 2024
              </AppLink>
              <span className="opacity-40">|</span>
              <AppLink href="/docs/dean-letter-f2024.pdf" external variant="muted">
                <DocumentIcon className="inline-block text-base" />
                Fall 2024
              </AppLink>
              <span className="opacity-40">|</span>
              <AppLink href="/docs/dean-letter-w2025.pdf" external variant="muted">
                <DocumentIcon className="inline-block text-base" />
                Winter 2025
              </AppLink>
              <span className="opacity-40">|</span>
              <AppLink href="/docs/dean-letter-f2025.pdf" external variant="muted">
                <DocumentIcon className="inline-block text-base" />
                Fall 2025
              </AppLink>
              <span className="opacity-40">|</span>
          </div>

          <div className="mt-8  space-y-1">
            <SectionHeader as="h3" size="small">Published Research</SectionHeader>
            <Text className="text-muted leading-snug">
              First-author publication with a subject-specific impact factor approximately 10× higher than other publications in the same field, this publication is extremely highly cited and has received approximately 10 times more citations than average.
            </Text>
            <span className="opacity-40">|</span>
              <AppLink href="https://badge.dimensions.ai/details/doi/10.1530/JME-17-0096?domain=https://jme.bioscientifica.com" external variant="muted">
                Research Article & Impact Factor
              </AppLink>
              <OpenIcon className="inline-block text-base" />
              <span className="opacity-40">|</span>
          </div>

          <div className="mt-8  space-y-1">
            <SectionHeader as="h3" size="small">Thesis Prize Nomination</SectionHeader>
            <Text className="text-muted leading-snug">
              Recognized for graduate research at York University
            </Text>
            <span className="opacity-40">|</span>
              <AppLink href="https://recherche-collection-search.bac-lac.gc.ca/eng/home/preservica?pid=e0ad5639-1017-41d4-a8fe-516535be6e92&app=laccat&resource=folderlist" external variant="muted">
                Thesis Document
                <OpenIcon className="inline-block text-base" />
              </AppLink>
              <span className="opacity-40">|</span>
          </div>

          <div className="mt-8  space-y-1">
            <SectionHeader as="h3" size="small">Conference Presentation</SectionHeader>
            <Text className="text-muted leading-snug">
              Invited to present at ENDO 2015, an international conference with 8,000+ attendees
            </Text>
            <span className="opacity-40">|</span>
              <AppLink href="https://plan.core-apps.com/tristar_endo15/abstract/ce68804dc0833021856b4af3d612d65c" external variant="muted">
                Conference Abstract & Schedule 
                <OpenIcon className="inline-block text-base" />
              </AppLink>
              <span className="opacity-40">|</span>
           </div>   
        </div>
      </Container>
    </Section>
  );
}