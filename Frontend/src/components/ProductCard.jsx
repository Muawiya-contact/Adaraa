import { motion } from 'framer-motion'

export const ProductCard = ({ product }) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      href={`/product/${product.slug || product.id}`}
      className="group block rounded-2xl overflow-hidden border hover:shadow-soft transition bg-white dark:bg-gray-900 dark:border-gray-800"
    >
      <div className="aspect-[4/5] bg-gradient-to-br from-brand-100 to-brand-200 relative dark:from-brand-900/30 dark:to-brand-800/30">
        <div className="absolute bottom-3 left-3 bg-white/90 text-brand-dark text-xs px-2 py-1 rounded">New</div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium group-hover:text-brand-600 transition">{product.title}</h3>
          <span className="font-semibold">${product.price}</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Free shipping over $50</p>
      </div>
    </motion.a>
  )
}


