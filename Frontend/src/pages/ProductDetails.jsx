import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const { slug } = useParams()
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Product: {slug}</h2>
      <p className="text-gray-700">Details coming soon.</p>
    </div>
  )
}


