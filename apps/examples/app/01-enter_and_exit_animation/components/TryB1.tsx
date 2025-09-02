import { clsx } from 'clsx'
import { useRef, useState } from 'react'
import { Panel } from './shared/Panel'
import { Trigger } from './shared/Trigger'
import { Wrapper } from './shared/Wrapper'

import styles from './TryB1.module.css'

export const TryB1 = () => {
  const [isCreated, setIsCreated] = useState(false)
  const [isShown, setIsShown] = useState(false)

  const timeout = useRef<NodeJS.Timeout>(null)

  const handleTriggerClick = () => {
    if (timeout.current) clearTimeout(timeout.current)

    if (!isCreated) {
      setIsCreated(true)
      requestAnimationFrame(() => setIsShown(true))
    } else {
      setIsShown(false)
      timeout.current = setTimeout(() => setIsCreated(false), 300)
    }
  }

  return (
    <Wrapper>
      <Trigger onClick={handleTriggerClick} />
      {isCreated && (
        <Panel className={clsx(styles.panel, isShown && styles.show)} />
      )}
    </Wrapper>
  )
}
