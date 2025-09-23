import { useEffect, useState } from 'react'
import { getUser, type GetUserResponse } from '../api/getUserWithoutAdapter'
import { UserProfile } from './UserProfile'

export const TryWithoutAdapter = () => {
  const [user, setUser] = useState<GetUserResponse>()

  const fetchUser = async () => {
    const user = await getUser()

    setUser(user)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return <UserProfile name={user?.user_name} email={user?.user_email} />
}
