import { Tile } from "@/components/custom/tile";
import { servicesData } from "@/data/data";

export default function ProjectsPage() {
  const data = servicesData.map(s => <Tile key={s.title} {...s} buttonText="More" type="services" />)
  return (
    <main className="p-2 min-h-[75vh]">
      <h1 className="text-4xl text-center mb-4 lg:my-12">Services</h1>
      <section className="grid grid-cols-1 lg:grid-cols-3 lg:w-2/3 lg:mx-auto justify-items-center">
        {data}
      </section>
    </main>
  );
}
