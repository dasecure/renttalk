import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">RentTalk</div>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link href="/forum" className="hover:text-gray-300">Forum</Link></li>
          </ul>
        </div>
      </nav>

      {/* About Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About RentTalk</h1>
        <p className="mb-4">
          RentTalk is a platform dedicated to helping renters and landlords communicate effectively and share valuable information about rental properties.
        </p>
        <p className="mb-4">
          Our mission is to create a transparent and fair rental market by providing a space for open discussions, reviews, and resources related to renting.
        </p>
        <p>
          Whether you're a tenant looking for your next home or a property owner seeking responsible renters, RentTalk is here to support your journey in the rental market.
        </p>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 RentTalk. All rights reserved.</p>
      </footer>
    </div>
  );
}