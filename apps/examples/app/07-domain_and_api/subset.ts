import { type Product } from './product'

export type GetProductResponse = Pick<Product, 'id' | 'name' | 'status'>

export const getProduct = async (id: string): Promise<GetProductResponse> => {
  const res = await fetch(`/api/products/${id}`)

  return res.json()
}
