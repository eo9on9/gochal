import { useSyncExternalStore } from 'react'

import styles from './Try.module.css'

interface User {
  name: string
  age: number
}

class UserStore {
  private state: User
  private listeners = new Set<() => void>()

  constructor(initialState: User) {
    this.state = initialState
  }

  subscribe = (listener: () => void) => {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  getSnapshot = () => this.state

  increaseAge = () => {
    this.state = { ...this.state, age: this.state.age + 1 }
    this.emit()
  }

  private emit() {
    for (const listener of this.listeners) {
      listener()
    }
  }
}

const userStore = new UserStore({ name: 'John', age: 20 })

const useUserStore = <T,>(selector: (state: User) => T): T =>
  useSyncExternalStore(
    userStore.subscribe,
    () => selector(userStore.getSnapshot()),
    () => selector(userStore.getSnapshot()),
  )

const increaseAgeFromOutside = () => {
  userStore.increaseAge()
}

export const Try6 = () => {
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

  const name = useUserStore(state => state.name)

  return <div className={styles.consumer}>User Name: {name}</div>
}

const UserAgeConsumer = () => {
  console.log('UserAgeConsumer executed')

  const age = useUserStore(state => state.age)

  return <div className={styles.consumer}>User Age: {age}</div>
}
