import Link from 'next/link';

export default function Home() {
    return (
        <main className="items-center py-14 w-1/2 m-auto">
            <h1 className="text-6xl font-bold">The best todo app out there.</h1>
            <p className="text-lg mt-5 opacity-50">
                Recommended by all minimalists.
            </p>
            <Link href="/create-todo">
                <button className="duration-200 mt-16 py-3 px-5 rounded-lg border border-neutral-700 hover:bg-neutral-800/30">
                    Create a todo -&gt;
                </button>
            </Link>
        </main>
    );
}
