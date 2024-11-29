import { About } from "@/components/custom/about";
import { Hero } from "@/components/custom/hero";
import Skills from "@/components/custom/skills";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Skills/>
    </main>
  );
}
