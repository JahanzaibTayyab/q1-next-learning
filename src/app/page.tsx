import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex gap-6 py-4 px-5">
        <a href="/about">About</a>
        <Link href="/contact-us">Contact Us</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
      <div>Home Page</div>
    </div>
  );
}
