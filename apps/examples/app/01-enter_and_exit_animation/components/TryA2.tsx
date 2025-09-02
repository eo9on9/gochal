import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
import { Panel } from './shared/Panel'
import { Trigger } from './shared/Trigger'
import { Wrapper } from './shared/Wrapper'

import styles from './TryA2.module.css'

export const TryA2 = () => {
  const [isCreated, setIsCreated] = useState(false)
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    if (isCreated) {
      requestAnimationFrame(() => setIsShown(true))
    } else {
      setIsShown(false)
    }
  }, [isCreated])

  return (
    <Wrapper>
      <Trigger onClick={() => setIsCreated(!isCreated)} />
      {isCreated && (
        <Panel className={clsx(styles.panel, isShown && styles.show)} />
      )}
    </Wrapper>
  )
}
