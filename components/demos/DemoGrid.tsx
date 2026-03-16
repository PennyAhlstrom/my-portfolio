import DemoCard from "@/components/demos/DemoCard";
import { demos } from "@/components/demos/DemoData";

export default function DemoGrid() {
  return (
      <div className="mt-10 grid gap-y-10 gap-x-8 md:grid-cols-2">
          {demos.map((demo) => (
            <DemoCard
              key={demo.slug}
              title={demo.title}
              slug={demo.slug}
              description={demo.description}
              tech={demo.tech}
            />
          ))}
          </div>
  );
}