// components
import Introduction from "../components/Introduction";
import Contact from "../components/Contact";
import Skills from "@/components/Skills";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Introduction />
      <Skills />
      <Project />
      <Contact />
      <div className="pb-10"></div>
    </main>
  );
}
