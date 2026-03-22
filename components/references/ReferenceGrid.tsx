import ReferenceCard from "@/components/references/ReferenceCard";

export default function ReferenceGrid() {
  return (
    <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2">
          <ReferenceCard
            title="Academic Reference – Microservices & Web Development"
            description="Strong technical ability in Spring Boot microservices, ASP.NET web development, and system architecture. Analytical thinking, independent problem-solving, and a deep understanding of software design principles."
            author="Professor – Enterprise Software Development"
            href="docs/references/reference-letter-1.pdf"
          />

          <ReferenceCard
            title="Academic Reference – Full-Stack Development & DevOps"
            description="Full-stack development (MERN/MEAN), DevOps practices, and team leadership. A+ academic performance, Git-based collaboration, and the ability to build scalable, well-structured applications."
            author="Professor – Full-Stack & DevOps"
            href="/docs/references/reference-letter-2.pdf"
          />
        </div>
  );
}