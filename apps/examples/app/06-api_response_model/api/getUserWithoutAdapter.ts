import { get } from './get'

export interface GetUserResponse {
  user_name: string
  user_email: string
}

export const getUser = async (): Promise<GetUserResponse> => {
  return await get({
    user_name: 'John Doe',
    user_email: 'john.doe@example.com',
  })
}
