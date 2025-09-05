import { useRef, useState } from 'react'
import { useDomMutationLog } from '../hooks/useDomMutationLog'

import styles from './Try4.module.css'

export const Try4 = () => {
  return (
    <div className={styles.wrapper}>
      <ParentA />
      <ParentB />
    </div>
  )
}

const ParentA = () => {
  console.log('---')
  console.log('ParentA executed')

  const ref = useRef<HTMLDivElement>(null)

  const [items, setItems] = useState(['A', 'B', 'C'])

  const reverse = () => {
    setItems([...items].reverse())
  }

  useDomMutationLog(ref, 'ParentA repainted')

  return (
    <div ref={ref} className={styles.parent}>
      <button onClick={reverse}>Reverse</button>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <Child key={i}>{item}</Child>
        ))}
      </ul>
    </div>
  )
}

const ParentB = () => {
  console.log('---')
  console.log('ParentB executed')

  const ref = useRef<HTMLDivElement>(null)

  const [items, setItems] = useState(['A', 'B', 'C'])

  const reverse = () => {
    setItems([...items].reverse())
  }

  useDomMutationLog(ref, 'ParentB repainted')

  return (
    <div ref={ref} className={styles.parent}>
      <button onClick={reverse}>Reverse</button>
      <ul className={styles.list}>
        {items.map(item => (
          <Child key={item}>{item}</Child>
        ))}
      </ul>
    </div>
  )
}

const Child = ({ children }: { children: string }) => {
  console.log('Child executed')

  const ref = useRef<HTMLLIElement>(null)

  useDomMutationLog(ref, 'Child repainted')

  return <li ref={ref}>{children}</li>
}
