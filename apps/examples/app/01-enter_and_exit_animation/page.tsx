'use client'

import { Final } from './components/Final'
import { TryA1 } from './components/TryA1'
import { TryA2 } from './components/TryA2'
import { TryA3 } from './components/TryA3'
import { TryB1 } from './components/TryB1'
import { TryB2 } from './components/TryB2'
import { TryB3 } from './components/TryB3'

import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.page}>
      <h1>컴포넌트의 등장과 퇴장에 애니메이션 주기</h1>
      <h2>등장</h2>
      <div className={styles.try}>
        <h3>시도 A1. transition</h3>
        <TryA1 />
      </div>
      <div className={styles.try}>
        <h3>시도 A2. transition + requestAnimationFrame</h3>
        <TryA2 />
      </div>
      <div className={styles.try}>
        <h3>시도 A3. animation</h3>
        <TryA3 />
      </div>
      <h2>퇴장</h2>
      <div className={styles.try}>
        <h3>시도 B1. transition + setTimeout</h3>
        <TryB1 />
      </div>
      <div className={styles.try}>
        <h3>시도 B2. transition + onTransitionEnd</h3>
        <TryB2 />
      </div>
      <div className={styles.try}>
        <h3>시도 B3. animation</h3>
        <TryB3 />
      </div>
      <div className={styles.try}>
        <h3>목표</h3>
        <TryB2 />
      </div>
      <h2>최종</h2>
      <div className={styles.try}>
        <h3>A2 + B2</h3>
        <Final />
      </div>
    </div>
  )
}
