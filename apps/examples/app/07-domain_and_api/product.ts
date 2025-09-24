export type Product = {
  id: string
  name: string
  price: number
  stock: number
  category: 'clothing' | 'electronics' | 'food'
  status: 'draft' | 'onSale' | 'soldOut' | 'discontinued'
}
