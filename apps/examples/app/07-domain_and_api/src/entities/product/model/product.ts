export interface Product {
  id: string
  name: string
  price: number
  stock: number
  category: 'clothing' | 'electronics' | 'food'
  status: 'draft' | 'onSale' | 'soldOut' | 'discontinued'
}

export interface ProductDTO {
  prd_id: string
  prd_name: string
  prd_price: number
  prd_stock: number
  prd_category: 'clothing' | 'electronics' | 'food'
  prd_status: 'draft' | 'onSale' | 'soldOut' | 'discontinued'
}

export const fromProductDTO = (dto: ProductDTO): Product => {
  return {
    id: dto.prd_id,
    name: dto.prd_name,
    price: dto.prd_price,
    stock: dto.prd_stock,
    category: dto.prd_category,
    status: dto.prd_status,
  }
}
