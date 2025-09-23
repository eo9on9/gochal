import { useEffect, useState } from 'react'
import { getUser, type GetUserResponse } from '../api/getUserWithAdapter'
import { UserProfile } from './UserProfile'

export const TryWithAdapter = () => {
  const [user, setUser] = useState<GetUserResponse>()

  const fetchUser = async () => {
    const user = await getUser()

    setUser(user)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return <UserProfile name={user?.name} email={user?.email} />
}
