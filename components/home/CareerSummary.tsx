import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CareerSummary() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionHeader>Career Summary</SectionHeader>
        {/* <h2 className="text-2xl font-semibold">Career Summary</h2> */}

        <ul className="mt-6 space-y-3 text-gray-700">
          <li>
            Reduced projected API costs by 82% by replacing paid services with
            open-source alternatives.
          </li>

          <li>
            Built machine learning models achieving over 90% test accuracy on
            classification tasks.
          </li>

          <li>
            Developed full-stack applications using the MERN stack supporting
            CRUD operations and authentication.
          </li>

          <li>
            Designed user-friendly interfaces that improved workflow efficiency
            for project users.
          </li>

          <li>
            Created AI-driven projects integrating Python, TensorFlow, and data
            analysis tools.
          </li>
        </ul>
      </Container>
    </section>
  );
}