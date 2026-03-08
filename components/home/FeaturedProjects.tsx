import Container from "@/components/layout/Container";
import Link from "next/link";

export default function FeaturedProjects() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>

          <Link
            href="/projects"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold">Gomoku AI</h3>

            <p className="mt-3 text-gray-700">
              Java implementation of the Gomoku board game with an AI opponent
              using search algorithms and heuristic evaluation.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold">Portfolio Website</h3>

            <p className="mt-3 text-gray-700">
              Professional portfolio built with Next.js and Tailwind to showcase
              projects, research, and technical experience.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}