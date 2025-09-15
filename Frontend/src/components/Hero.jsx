import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 400"><defs><linearGradient id="a" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#fff" offset="0"/><stop stopColor="#fff" stopOpacity="0" offset="1"/></linearGradient></defs><g fill="url(#a)"><circle cx="100" cy="100" r="80"/><circle cx="700" cy="300" r="100"/></g></svg>
      <div className="relative max-w-6xl mx-auto px-6 py-24 text-white">
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="uppercase tracking-widest text-sm mb-4">New Season</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-5xl md:text-6xl font-extrabold leading-tight">Elevate Your Style<br/>With ADARAA</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-4 max-w-2xl text-white/90">Bold colors, elegant lines, and luxurious comfort. Discover women's fashion made for you.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 flex gap-4">
          <a href="/shop" className="bg-white text-brand-dark px-6 py-3 rounded-md font-medium shadow-soft hover:shadow-lg transition">Shop Collection</a>
          <a href="/about" className="border border-white/70 text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition">About Us</a>
        </motion.div>
      </div>
    </section>
  )
}


