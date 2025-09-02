import { useState } from 'react'
import { Panel } from './shared/Panel'
import { Trigger } from './shared/Trigger'
import { Wrapper } from './shared/Wrapper'

import { clsx } from 'clsx'
import styles from './TryB3.module.css'

export const TryB3 = () => {
  const [isCreated, setIsCreated] = useState(false)
  const [isShown, setIsShown] = useState(false)

  const handleTriggerClick = () => {
    if (!isCreated) {
      setIsCreated(true)
      setIsShown(true)
    } else {
      setIsShown(false)
    }
  }

  const handleAnimationEnd = () => {
    if (!isShown) setIsCreated(false)
  }

  return (
    <Wrapper>
      <Trigger onClick={handleTriggerClick} />
      {isCreated && (
        <Panel
          className={clsx(styles.panel, isShown ? styles.show : styles.hide)}
          onAnimationEnd={handleAnimationEnd}
        />
      )}
    </Wrapper>
  )
}
