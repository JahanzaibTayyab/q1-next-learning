import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex gap-6 py-4 px-5 bg-gray-300">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact-us">Contact Us</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/blogs">Blogs</Link>
    </nav>
  );
};

export default Header;
