import { fromProductDTO, type Product, type ProductDTO } from '../model/product'

export interface GetProductsResponse {
  list: Array<{
    product: Product
    lastUpdatedAt: string
  }>
}

export interface GetProductsResponseDTO {
  list: Array<{
    product: ProductDTO
    prd_last_updated_at: string
  }>
}

export const fromGetProductsResponseDTO = (
  dto: GetProductsResponseDTO,
): GetProductsResponse => {
  return {
    list: dto.list.map(item => ({
      product: fromProductDTO(item.product),
      lastUpdatedAt: item.prd_last_updated_at,
    })),
  }
}

export const getProducts = async (): Promise<GetProductsResponse> => {
  const res = await fetch('/api/products')

  return fromGetProductsResponseDTO(await res.json())
}
