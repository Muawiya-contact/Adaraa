export const Footer = () => {
  return (
    <footer className="mt-10 bg-gradient-to-r from-brand-100 to-brand-200">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-brand-900 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between">
        <span>© {new Date().getFullYear()} ADARAA</span>
        <div className="flex items-center gap-4">
          <a className="hover:text-brand-700" href="/shop">Shop</a>
          <a className="hover:text-brand-700" href="/about">About</a>
          <a className="hover:text-brand-700" href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}


