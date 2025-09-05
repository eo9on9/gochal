import { useRef, useState } from 'react'
import { useDomMutationLog } from '../hooks/useDomMutationLog'

import styles from './Try2.module.css'

export const Try2 = () => {
  return <Parent />
}

const Parent = () => {
  console.log('---')
  console.log('Parent executed')

  const [count, setCount] = useState(0)

  const ref = useRef<HTMLDivElement>(null)

  useDomMutationLog(ref, 'Parent repainted')

  return (
    <div ref={ref} className={styles.parent}>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>count++</button>
      <Child />
    </div>
  )
}

const Child = () => {
  console.log('Child executed')

  const ref = useRef<HTMLDivElement>(null)

  useDomMutationLog(ref, 'Child repainted')

  return (
    <div ref={ref} className={styles.child}>
      Child
    </div>
  )
}
