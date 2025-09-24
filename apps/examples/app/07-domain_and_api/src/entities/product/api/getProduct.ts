import { fromProductDTO, type Product, type ProductDTO } from '../model/product'

export interface GetProductResponse {
  product: Product
  lastUpdatedAt: string
}

export interface GetProductResponseDTO {
  product: ProductDTO
  prd_last_updated_at: string
}

export const fromGetProductResponseDTO = (
  dto: GetProductResponseDTO,
): GetProductResponse => {
  return {
    product: fromProductDTO(dto.product),
    lastUpdatedAt: dto.prd_last_updated_at,
  }
}

export const getProduct = async (id: string): Promise<GetProductResponse> => {
  const res = await fetch(`/api/products/${id}`)

  return fromGetProductResponseDTO(await res.json())
}
