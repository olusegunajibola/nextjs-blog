import Link from 'next/link';
import './globals.css'; // Ensure global styles are imported

export default function Layout({ children }) {
    return (
        <>
            <nav className="bg-blue-600 text-white p-4">
                <ul className="flex space-x-4">
                    <li>
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
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </>
    );
}