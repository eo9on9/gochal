import { Try1 } from './components/Try1'
import { Try2 } from './components/Try2'
import { Try3 } from './components/Try3'
import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.page}>
      <h1>모노레포는 효율적이다?</h1>
      <h2>코드 재사용 관점</h2>
      <div className={styles.try}>
        <h3>예시1</h3>
        <Try1 />
      </div>
      <div className={styles.try}>
        <h3>예시2</h3>
        <Try2 />
      </div>
      <h2>버전 관리 관점</h2>
      <div className={styles.try}>
        <h3>예시3</h3>
        <Try3 />
      </div>
    </div>
  )
}
