import { useCallback, useMemo, useRef, useState } from 'react'
import { useDomMutationLog } from '../hooks/useDomMutationLog'

import styles from './Try5.module.css'

export const Try5 = () => {
  return <Parent />
}

const Parent = () => {
  console.log('---')
  console.log('Executed')

  const [count, setCount] = useState(0)

  const ref = useRef<HTMLDivElement>(null)

  useDomMutationLog(ref, 'Repainted')

  const handleCountClick = useCallback(() => setCount(count + 1), [count])

  const doubleCount = useMemo(() => count * 2, [count])

  return (
    <div ref={ref} className={styles.parent}>
      <div>
        count: {count} / doubleCount: {doubleCount}
      </div>
      <button onClick={handleCountClick}>count++</button>
    </div>
  )
}
