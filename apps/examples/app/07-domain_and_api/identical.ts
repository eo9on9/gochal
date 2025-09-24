import { type Product } from './product'

export type GetProductResponse = Product

export const getProduct = async (id: string): Promise<GetProductResponse> => {
  const res = await fetch(`/api/products/${id}`)

  return res.json()
}
