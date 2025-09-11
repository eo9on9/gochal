import { createContext, useContext, useState } from 'react'

import styles from './Try.module.css'

interface User {
  name: string
  age: number
}

const MyContext = createContext<User | undefined>(undefined)

export const Try1 = () => {
  const [user, setUser] = useState<User>({
    name: 'John',
    age: 20,
  })

  const increaseAge = () => setUser({ ...user, age: user.age + 1 })

  return (
    <div className={styles.wrapper}>
      <button onClick={increaseAge}>user.age++</button>
      <MyContext.Provider value={user}>
        <UserNameConsumer />
        <UserAgeConsumer />
      </MyContext.Provider>
    </div>
  )
}

const UserNameConsumer = () => {
  console.log('UserNameConsumer executed')

  const user = useContext(MyContext)

  return <div className={styles.consumer}>User Name: {user?.name}</div>
}

const UserAgeConsumer = () => {
  console.log('UserAgeConsumer executed')

  const user = useContext(MyContext)

  return <div className={styles.consumer}>User Age: {user?.age}</div>
}
