import { Tile } from "@/components/custom/tile";
import { projectsData } from "@/data/data";

export default function ProjectsPage() {
  const data = projectsData.map(s => <Tile key={s.title} {...s} buttonText="Open" type="projects" />)
  return (
    <main className="p-2 min-h-[75vh]">
      <h1 className="text-4xl text-center mb-4 lg:my-12">Projects</h1>
      <section className="grid grid-cols-1 lg:flex lg:w-2/3 lg:mx-auto justify-items-center justify-evenly">
        {data}
      </section>
    </main>
  );
}
