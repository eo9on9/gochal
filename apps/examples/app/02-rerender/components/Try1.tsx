import { useRef, useState } from 'react'
import { useDomMutationLog } from '../hooks/useDomMutationLog'

import styles from './Try1.module.css'

export const Try1 = () => {
  return <Parent />
}

const Parent = () => {
  console.log('---')
  console.log('Executed')

  const [count, setCount] = useState(0)

  const ref = useRef<HTMLDivElement>(null)

  useDomMutationLog(ref, 'Repainted')

  return (
    <div ref={ref} className={styles.parent}>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>count++</button>
    </div>
  )
}
