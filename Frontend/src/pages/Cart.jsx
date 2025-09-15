import { useSelector } from 'react-redux'

export default function Cart() {
  const items = useSelector((s) => s.cart.items)
  const subtotal = items.reduce((sum, i) => sum + i.quantity * i.price, 0)
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-2 mb-4">
            {items.map((i) => (
              <li key={i.productId} className="flex justify-between">
                <span>{i.title} x {i.quantity}</span>
                <span>${(i.quantity * i.price).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-medium">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <a className="mt-6 inline-block bg-black text-white px-6 py-3 rounded" href="/checkout">Checkout</a>
        </>
      )}
    </div>
  )
}


