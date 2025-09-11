'use client'

import { Try1 } from './components/Try1'
import { Try2 } from './components/Try2'
import { Try3 } from './components/Try3'
import { Try4 } from './components/Try4'
import { Try5 } from './components/Try5'
import { Try6 } from './components/Try6'
import { Try7 } from './components/Try7'

import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.page}>
      <h1>리액트 컨텍스트는 안좋다?</h1>
      <h2>하위 컴포넌트 리렌더링 문제</h2>
      <div className={styles.try}>
        <h3>예시1</h3>
        <Try1 />
      </div>
      <div className={styles.try}>
        <h3>예시2</h3>
        <Try2 />
      </div>
      <h2>예측하기 어려운 리렌더링 범위</h2>
      <div className={styles.try}>
        <h3>예시3</h3>
        <Try3 />
      </div>
      <div className={styles.try}>
        <h3>예시4</h3>
        <Try4 />
      </div>
      <h2>번거롭고 복잡하다</h2>
      <div className={styles.try}>
        <h3>예시5</h3>
        <Try5 />
      </div>
      <h2>리액트 외부에서의 접근 및 제어</h2>
      <div className={styles.try}>
        <h3>예시6</h3>
        <Try6 />
      </div>
      <div className={styles.try}>
        <h3>예시7</h3>
        <Try7 />
      </div>
    </div>
  )
}
