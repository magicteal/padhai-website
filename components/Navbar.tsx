import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-3 items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/images/mainLogo.svg"
              alt="Padhai logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center gap-6" aria-label="Primary navigation">
          <a href="#" className="text-white font-medium hover:text-white/90">
            Why AI
          </a>
          <a href="#" className="text-white font-medium hover:text-white/90">
            Course details
          </a>
          <a href="#" className="text-white font-medium hover:text-white/90">
            Projects
          </a>
          <a href="#" className="text-white font-medium hover:text-white/90">
            Pricing
          </a>
          <a href="#" className="text-white font-medium hover:text-white/90">
            FAQ
          </a>
        </nav>

        {/* Actions */}
        <div className="flex justify-end items-center gap-3">
          <button className="px-5 py-2 rounded-full font-semibold border border-white text-white bg-transparent hover:bg-white/10 transition">
            Log in
          </button>
          <button className="px-5 py-2 rounded-full font-semibold bg-white text-purple-600 hover:bg-gray-100 transition">
            Sign up
          </button>
        </div>

      </div>
    </header>
  );
}
