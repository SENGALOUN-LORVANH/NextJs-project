import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
      </header>

      <main className="flex-grow flex flex-col items-center sm:items-start gap-6 mt-8">
      </main>

      <footer className="flex justify-center items-center">
        <a href="" className="hover:text-blue-500">Learning... next.js</a>
      </footer>
    </div>
  );
}
