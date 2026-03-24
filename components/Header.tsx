import Link from "next/link";
import { SmilePlus } from "./Icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b justify-center flex border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between max-w-6xl">
        <Link href="/" className="flex items-center gap-3">
          {/* This is the App Icon vibe from Iteration 1 */}
          <div className="w-12 h-12 bg-[#EE3E38] rounded-xl flex items-center justify-center shadow-sm">
            <SmilePlus className="text-white w-7 h-7" strokeWidth={2.5} />
            <div className="absolute w-3.5 h-3.5 bg-white rounded-full translate-x-3.5 -translate-y-3.5 border-[3px] border-[#EE3E38] flex items-center justify-center">
                <div className="w-1.5 h-0.5 bg-[#EE3E38]"></div>
                <div className="absolute w-0.5 h-1.5 bg-[#EE3E38]"></div>
            </div>
          </div>
          <span className="font-black text-2xl tracking-tight text-gray-900">Grüezi Deutsch</span>
        </Link>
        <nav className="hidden md:flex gap-8 font-black text-gray-500 text-sm tracking-wide uppercase">
          <Link href="#features" className="hover:text-[#EE3E38] transition-colors">Features</Link>
          <Link href="#about" className="hover:text-[#EE3E38] transition-colors">About</Link>
        </nav>
        <div className="flex gap-4">
          <Link href="#download" className="playful-button text-sm px-6 py-2.5 shadow-[0_4px_0_#C62828] border-2 border-[transparent] hover:border-[#EE3E38]">
            Get App
          </Link>
        </div>
      </div>
    </header>
  );
}
