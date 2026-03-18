export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 sm:px-6 mt-20 flex justify-center">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-gray-500 font-medium">
          &copy; {new Date().getFullYear()} Grüezi App. All rights reserved.
        </div>
        <div className="flex gap-6 text-gray-400 font-bold">
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
