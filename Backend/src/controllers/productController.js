export async function listProducts(_req, res) {
  // Temporary static list until models are added
  const products = [
    { id: "p1", title: "Summer Dress", price: 59.99 },
    { id: "p2", title: "Classic Top", price: 29.99 },
  ];
  res.json({ products });
}
