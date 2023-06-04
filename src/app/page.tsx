import Hero from "@/views/hero";
import AboutMe from "@/views/about";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex  bg-gray-50 py-5 flex-col min-h-screen p-24">
      <div className="flex gap-5 bg-gray-400">
        <Link href="/about">About Us</Link>
        <Link href="/route-repeat">Route Repeat</Link>
        <Link href="/route-repeat/nested">Nested Route Repeat</Link>
        <Link href="/female">Female</Link>
      </div>
      <Hero />
      <AboutMe />
      hello word
    </div>
  );
}
