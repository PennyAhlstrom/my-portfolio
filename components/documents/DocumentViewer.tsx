import Section from "@/components/ui/SectionWrapper";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { documents } from "@/components/documents/DocumentData";
import { actionIcons } from "@/components/icons/actionIcons";

const OpenIcon = actionIcons.view;
const DownloadIcon = actionIcons.download;
const DocumentIcon = actionIcons.document;

export default function DocumentViewer() {
  return (
    <Section variant="plain">
      <Container>
        <div className="max-w-4xl">
          <SectionHeader>Documents</SectionHeader>

          <Text className="mt-4 text-muted">
            View or download my professional and academic documents below.
          </Text>

          <div className="mt-10">
            {documents.map((doc, index) => (
              <div
                key={doc.title}
                className={index !== 0 ? "border-t border-border pt-10 mt-10" : ""}
              >
                <SectionHeader as="h3" size="sub" className="mb-3">
                  {doc.title}
                </SectionHeader>

                <Text className="text-muted max-w-2xl">
                  {doc.description}
                </Text>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    href={doc.href}
                    variant="primary"
                    theme="light"
                    external
                    newTab
                  >
                    
                    <span className="inline-flex items-center">
                        View {doc.title}
                    </span>
                    <OpenIcon className="inline-block text-base" />
                </Button>

                  <a
                    href={doc.href}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-lg font-medium px-5 py-3 text-sm border border-foreground bg-foreground text-white hover:border-accent hover:bg-accent transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <DownloadIcon className="text-base" />
                    Download {doc.title}
                  </a>

                </div>

                <Text className="mt-3 text-sm text-muted">
                <DocumentIcon className="inline-block text-base" />
                  PDF • Updated {doc.updated} • {doc.pages}
                </Text>

              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}