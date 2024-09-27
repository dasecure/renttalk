import Link from 'next/link';

export default function Forum() {
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

      {/* Forum Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">RentTalk Forum</h1>
        <p className="mb-4">Welcome to the RentTalk Forum! This is where you can discuss various topics related to renting.</p>
        
        {/* Placeholder for forum categories or recent threads */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Popular Categories</h2>
          <ul className="list-disc list-inside">
            <li>Tenant Rights</li>
            <li>Property Maintenance</li>
            <li>Rental Market Trends</li>
            <li>Landlord-Tenant Communication</li>
          </ul>
        </div>
        
        {/* Placeholder for a "Start New Thread" button */}
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Start New Thread
        </button>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 RentTalk. All rights reserved.</p>
      </footer>
    </div>
  );
}