export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b dark:bg-gray-900/70 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-2xl font-extrabold text-brand-700 dark:text-white">ADARAA</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-brand-600 dark:text-gray-200" href="/shop">Shop</a>
          <a className="hover:text-brand-600 dark:text-gray-200" href="/about">About</a>
          <a className="hover:text-brand-600 dark:text-gray-200" href="/contact">Contact</a>
          <a className="hover:text-brand-600 dark:text-gray-200" href="/cart">Cart</a>
          <a className="bg-brand-500 text-white px-4 py-2 rounded-md shadow-soft hover:bg-brand-600" href="/login">Login</a>
        </nav>
        <div className="flex items-center gap-2">
          <a className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100 dark:hover:bg-gray-800" href="/cart">🛒</a>
          <a className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100 dark:hover:bg-gray-800" href="/login">👤</a>
          <button id="menuBtn" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => {
            const m = document.getElementById('mobileMenu');
            if (!m) return; m.classList.toggle('hidden');
          }}>☰</button>
        </div>
      </div>
      <div id="mobileMenu" className="md:hidden hidden border-t bg-white dark:bg-gray-900 dark:border-gray-800">
        <div className="px-6 py-4 flex flex-col gap-3">
          <a href="/shop" className="py-1">Shop</a>
          <a href="/about" className="py-1">About</a>
          <a href="/contact" className="py-1">Contact</a>
          <a href="/cart" className="py-1">Cart</a>
          <a href="/login" className="py-1">Login</a>
        </div>
      </div>
    </header>
  )
}


