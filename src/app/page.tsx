import Hero from "@/views/hero";
import AboutMe from "@/views/about";

export default function Home() {
  return (
    <div className="flex justify-center bg-gray-100 py-5 flex-col">
      <Hero />
      <AboutMe />
    </div>
  );
}
