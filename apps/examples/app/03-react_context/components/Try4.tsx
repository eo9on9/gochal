import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import styles from './Try.module.css'

interface User {
  name: string
  age: number
}

interface UserState {
  user: User
  increaseAge: () => void
}

const useUserStore = create<UserState>()(
  devtools(
    (set): UserState => ({
      user: { name: 'John', age: 20 },
      increaseAge: () =>
        set(
          state => ({
            user: { ...state.user, age: state.user.age + 1 },
          }),
          false,
          'user/increaseAge',
        ),
    }),
    { name: 'user' },
  ),
)

export const Try4 = () => {
  const increaseAge = useUserStore(state => state.increaseAge)

  return (
    <div className={styles.wrapper}>
      <button onClick={increaseAge}>user.age++</button>
      <UserNameConsumer />
      <UserAgeConsumer />
    </div>
  )
}

const UserNameConsumer = () => {
  console.log('UserNameConsumer executed')

  const name = useUserStore(state => state.user.name)

  return <div className={styles.consumer}>User Name: {name}</div>
}

const UserAgeConsumer = () => {
  console.log('UserAgeConsumer executed')

  const age = useUserStore(state => state.user.age)

  return <div className={styles.consumer}>User Age: {age}</div>
}
