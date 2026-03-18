import Link from "next/link";
import { SmilePlus } from "./Icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b justify-center flex border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between max-w-6xl">
        <Link href="/" className="flex items-center gap-2">
          {/* This is the App Icon vibe from Iteration 1 */}
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-sm">
            <SmilePlus className="text-white w-6 h-6" strokeWidth={2.5} />
            <div className="absolute w-3 h-3 bg-white rounded-full translate-x-3 -translate-y-3 border-2 border-primary flex items-center justify-center">
                <div className="w-1.5 h-0.5 bg-primary"></div>
                <div className="absolute w-0.5 h-1.5 bg-primary"></div>
            </div>
          </div>
          <span className="font-extrabold text-xl tracking-tight text-gray-900">Grüezi Deutsch</span>
        </Link>
        <nav className="hidden md:flex gap-8 font-bold text-gray-900 text-sm">
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
        </nav>
        <div className="flex gap-4">
          <Link href="#download" className="playful-button text-sm px-6 py-2">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
