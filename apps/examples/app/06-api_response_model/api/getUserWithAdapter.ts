import { get } from './get'

interface GetUserResponseDTO {
  user_name: string
  user_email: string
}

export interface GetUserResponse {
  name: string
  email: string
}

export const adapter = (dto: GetUserResponseDTO): GetUserResponse => {
  return {
    name: dto.user_name,
    email: dto.user_email,
  }
}

export const getUser = async (): Promise<GetUserResponse> => {
  const dto = await get({
    user_name: 'John Doe',
    user_email: 'john.doe@example.com',
  })

  return adapter(dto)
}
