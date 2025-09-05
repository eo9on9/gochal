'use client'

import { Try1 } from './components/Try1'
import { Try2 } from './components/Try2'
import { Try3 } from './components/Try3'
import { Try4 } from './components/Try4'
import { Try5 } from './components/Try5'

import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.page}>
      <h1>리렌더링</h1>
      <h2>질문 다시 보기</h2>
      <div className={styles.try}>
        <h3>상태가 바뀌면 리렌더링 된다</h3>
        <Try1 />
      </div>
      <div className={styles.try}>
        <h3>부모가 리렌더링 되면 자식도 리렌더링 된다</h3>
        <Try2 />
      </div>
      <div className={styles.try}>
        <h3>리렌더링을 최소화해야 한다 - 재실행 관점</h3>
        <Try3 />
      </div>
      <div className={styles.try}>
        <h3>리렌더링을 최소화해야 한다 - 커밋/페인트 관점</h3>
        <Try4 />
      </div>
      <div className={styles.try}>
        <h3>useMemo/useCallback로 리렌더링 비용을 줄인다</h3>
        <Try5 />
      </div>
    </div>
  )
}
