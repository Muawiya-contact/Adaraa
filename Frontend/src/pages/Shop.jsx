import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../store/slices/productsSlice'
import { ProductCard } from '../components/ProductCard'

export default function Shop() {
  const dispatch = useDispatch()
  const products = useSelector((s) => s.products.list)
  useEffect(() => {
    // placeholder products until backend is wired
    dispatch(setProducts([{ id: 'p1', title: 'Summer Dress', price: 59.99 }]))
  }, [dispatch])

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold">Shop</h2>
        <div className="flex gap-3 text-sm">
          <button className="px-3 py-1.5 rounded border hover:bg-brand-50">All</button>
          <button className="px-3 py-1.5 rounded border hover:bg-brand-50">Dresses</button>
          <button className="px-3 py-1.5 rounded border hover:bg-brand-50">Tops</button>
          <button className="px-3 py-1.5 rounded border hover:bg-brand-50">Bottoms</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}


