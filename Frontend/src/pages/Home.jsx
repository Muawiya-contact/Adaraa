import { Hero } from '../components/Hero'
import { ProductCard } from '../components/ProductCard'

export default function Home() {
  const featured = [
    { id: 'p1', title: 'Summer Dress', price: 59.99 },
    { id: 'p2', title: 'Classic Top', price: 29.99 },
    { id: 'p3', title: 'Linen Pants', price: 49.99 },
  ]
  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-semibold">Featured</h2>
          <a href="/shop" className="text-brand-600 hover:text-brand-700">View all →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  )
}


