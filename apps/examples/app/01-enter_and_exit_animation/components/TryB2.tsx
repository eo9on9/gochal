import { clsx } from 'clsx'
import { useState } from 'react'
import { Panel } from './shared/Panel'
import { Trigger } from './shared/Trigger'
import { Wrapper } from './shared/Wrapper'

import styles from './TryB2.module.css'

export const TryB2 = () => {
  const [isCreated, setIsCreated] = useState(false)
  const [isShown, setIsShown] = useState(false)

  const handleTriggerClick = () => {
    if (!isCreated) {
      setIsCreated(true)
      requestAnimationFrame(() => setIsShown(true))
    } else {
      setIsShown(false)
    }
  }

  const handleTransitionEnd = () => {
    if (!isShown) setIsCreated(false)
  }

  return (
    <Wrapper>
      <Trigger onClick={handleTriggerClick} />
      {isCreated && (
        <Panel
          className={clsx(styles.panel, isShown && styles.show)}
          onTransitionEnd={handleTransitionEnd}
        />
      )}
    </Wrapper>
  )
}
