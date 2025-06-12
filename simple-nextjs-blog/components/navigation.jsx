import Link from "next/link";

export default function Navigation() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/posts/1", label: "Page 1" },
    { href: "/posts/2", label: "Page 2" },
    { href: "/posts/3", label: "Page 3" },
    { href: "/posts/4", label: "Page 4" },
  ]

  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-4">
        {
          links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))
        }
        {/* <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts/1">Page 1</Link>
        </li>
        <li>
          <Link href="/posts/2">Page 2</Link>
        </li>
        <li>
          <Link href="/posts/3">Page 3</Link>
        </li>
        <li>
          <Link href="/posts/4">Page 4</Link>
        </li> */}
      </ul>
    </nav>
  );
}
