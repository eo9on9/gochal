import { useState } from 'react'
import { Panel } from './shared/Panel'
import { Trigger } from './shared/Trigger'
import { Wrapper } from './shared/Wrapper'

import styles from './TryA3.module.css'

export const TryA3 = () => {
  const [isCreated, setIsCreated] = useState(false)

  return (
    <Wrapper>
      <Trigger onClick={() => setIsCreated(!isCreated)} />
      {isCreated && <Panel className={styles.panel} />}
    </Wrapper>
  )
}
