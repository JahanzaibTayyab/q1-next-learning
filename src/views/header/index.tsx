import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex gap-6 py-2 px-5 bg-gray-300">
      <Link href="/" className="text-sm">
        Home
      </Link>
      <Link href="/about" className="text-sm">
        About
      </Link>
      <Link href="/contact-us" className="text-sm">
        Contact Us
      </Link>
      <Link href="/dashboard" className="text-sm">
        Dashboard
      </Link>
      <Link href="/blogs" className="text-sm">
        Blogs
      </Link>
    </nav>
  );
};

export default Header;
