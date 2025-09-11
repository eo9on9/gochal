import {
  createContext,
  useContext,
  useRef,
  type PropsWithChildren,
} from 'react'
import { createStore, useStore, type StoreApi } from 'zustand'

import styles from './Try.module.css'

interface User {
  name: string
  age: number
}

interface UserState {
  user: User
  increaseAge: () => void
}

const StoreContext = createContext<StoreApi<UserState> | null>(null)

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<StoreApi<UserState> | null>(null)

  if (storeRef.current === null) {
    storeRef.current = createStore<UserState>(set => ({
      user: { name: 'John', age: 20 },
      increaseAge: () =>
        set(state => ({
          user: { ...state.user, age: state.user.age + 1 },
        })),
    }))
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStoreInContext<T>(selector: (state: UserState) => T): T {
  const store = useContext(StoreContext)

  if (!store) {
    throw new Error('Missing StoreProvider')
  }

  return useStore(store, selector)
}

export const Try5 = () => {
  return (
    <div className={styles.wrapper}>
      <StoreProvider>
        <IncreaseAgeButton />
        <UserNameConsumer />
        <UserAgeConsumer />
      </StoreProvider>
    </div>
  )
}

const IncreaseAgeButton = () => {
  const increaseAge = useStoreInContext(state => state.increaseAge)

  return <button onClick={increaseAge}>user.age++</button>
}

const UserNameConsumer = () => {
  console.log('UserNameConsumer executed')

  const name = useStoreInContext(state => state.user.name)

  return <div className={styles.consumer}>User Name: {name}</div>
}

const UserAgeConsumer = () => {
  console.log('UserAgeConsumer executed')

  const age = useStoreInContext(state => state.user.age)

  return <div className={styles.consumer}>User Age: {age}</div>
}
