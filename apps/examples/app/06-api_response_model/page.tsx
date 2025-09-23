'use client'

import { TryWithAdapter } from './components/TryWithAdapter'
import { TryWithoutAdapter } from './components/TryWithoutAdapter'

import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.page}>
      <h1>API 응답 모델</h1>
      <h2>API 응답 모델 그대로 쓰기</h2>
      <div className={styles.try}>
        <TryWithoutAdapter />
      </div>
      <h2>API 응답 모델 그대로 쓰지 않기</h2>
      <div className={styles.try}>
        <TryWithAdapter />
      </div>
    </div>
  )
}
