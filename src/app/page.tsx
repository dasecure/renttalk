import Image from "next/image";
import Link from "next/link";
import { Home as HomeIcon, Users, Shield, MapPin, MessageSquare, Calendar, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-slate-900 text-slate-100">
      {/* Navigation Bar */}
      <nav className="bg-slate-800 text-slate-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">RentTalk</div>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-slate-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-slate-300">About</Link></li>
            <li><Link href="/forum" className="hover:text-slate-300">Forum</Link></li>
          </ul>
        </div>
      </nav>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to RentTalk
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl">
                  A platform for tenants to share, discuss, and resolve issues collectively.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input className="max-w-lg flex-1 bg-slate-800 border-slate-700 rounded px-3 py-2" placeholder="Enter your email" type="email" />
                  <button type="submit" className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded flex items-center">
                    Sign Up
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </form>
                <p className="text-xs text-slate-400">
                  Sign up to join our community and stay updated.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-slate-700 p-4 rounded-lg">
                <Users className="h-10 w-10 mb-2 text-slate-300" />
                <h3 className="text-xl font-bold">Unified Voice</h3>
                <p className="text-sm text-slate-400 text-center">
                  Communicate collectively with landlords and property managers.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-slate-700 p-4 rounded-lg">
                <Shield className="h-10 w-10 mb-2 text-slate-300" />
                <h3 className="text-xl font-bold">Issue Resolution</h3>
                <p className="text-sm text-slate-400 text-center">
                  Resolve tenant issues without resorting to legal action.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-slate-700 p-4 rounded-lg">
                <MapPin className="h-10 w-10 mb-2 text-slate-300" />
                <h3 className="text-xl font-bold">Rent Mapping</h3>
                <p className="text-sm text-slate-400 text-center">
                  Research property ownership for potential collective bargaining.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-slate-700 p-4 rounded-lg">
                <MessageSquare className="h-10 w-10 mb-2 text-slate-300" />
                <h3 className="text-xl font-bold">Open Discussion</h3>
                <p className="text-sm text-slate-400 text-center">
                  Share views and discuss key issues with fellow tenants.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-slate-700 p-4 rounded-lg">
                <Calendar className="h-10 w-10 mb-2 text-slate-300" />
                <h3 className="text-xl font-bold">Quarterly Updates</h3>
                <p className="text-sm text-slate-400 text-center">
                  Stay informed with regular updates on tenant rights and issues.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-slate-700 p-4 rounded-lg">
                <Users className="h-10 w-10 mb-2 text-slate-300" />
                <h3 className="text-xl font-bold">Community Events</h3>
                <p className="text-sm text-slate-400 text-center">
                  Participate in block parties and community gatherings.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Issues</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">EV Chargers</h3>
                <p className="text-slate-400">
                  Discuss the addition of electric vehicle charging stations to the complex.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">Enhanced Security</h3>
                <p className="text-slate-400">
                  Explore options for additional security measures to ensure resident safety.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">Maintenance Requests</h3>
                <p className="text-slate-400">
                  Streamline the process for submitting and tracking maintenance requests.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-slate-700">
        <p className="text-xs text-slate-400">© 2024 RentTalk. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-slate-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-slate-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
