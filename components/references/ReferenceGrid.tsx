import ReferenceCard from "@/components/references/ReferenceCard";

export default function ReferenceGrid() {
  return (
    <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2">
          <ReferenceCard
            title="Reference Letter"
            description="Recommendation from an instructor describing academic performance and technical strengths."
            href="/references/reference-letter.pdf"
          />

          <ReferenceCard
            title="Professional Reference"
            description="Reference highlighting collaboration, work ethic, and project contributions."
            href="/references/professional-reference.pdf"
          />
        </div>
  );
}