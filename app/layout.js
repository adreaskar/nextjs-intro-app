import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

export const metadata = {
    title: 'My Todo App',
    description: 'Created with Next.js',
};

export default function RootLayout({ children }) {
    const links = [
        { href: '/', label: 'Home' },
        { href: '/todos', label: 'Todos' },
        { href: '/create-todo', label: 'Create a Todo' },
    ];

    return (
        <html lang="en">
            <body>
                <header className="w-1/2 m-auto py-8">
                    <nav>
                        <ul className="flex gap-10">
                            {links.map(({ href, label }) => {
                                return (
                                    <li key={href}>
                                        <Link href={href}>{label}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </header>

                <div>{children}</div>

                <footer className="text-white/50 absolute bottom-0 p-7 w-screen text-center">
                    Andreas Karabetian • Department of Digital Systems •{' '}
                    {new Date().getFullYear()}
                </footer>
            </body>
        </html>
    );
}
