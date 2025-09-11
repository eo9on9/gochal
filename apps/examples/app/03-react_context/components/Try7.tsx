import { create } from 'zustand'

import styles from './Try.module.css'

interface User {
  name: string
  age: number
}

interface UserState {
  user: User
  increaseAge: () => void
}

const useUserStore = create<UserState>(set => ({
  user: { name: 'John', age: 20 },
  increaseAge: () =>
    set(state => ({
      user: { ...state.user, age: state.user.age + 1 },
    })),
}))

const increaseAgeFromOutside = () => {
  useUserStore.getState().increaseAge()
}

export const Try7 = () => {
  return (
    <div className={styles.wrapper}>
      <button onClick={increaseAgeFromOutside}>user.age++</button>
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
