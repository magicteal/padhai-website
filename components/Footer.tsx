export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">Footer content</p>
        <nav className="flex gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900 transition">Link 1</a>
          <a href="#" className="hover:text-gray-900 transition">Link 2</a>
          <a href="#" className="hover:text-gray-900 transition">Link 3</a>
        </nav>
      </div>
    </footer>
  );
}
