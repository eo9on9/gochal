import { type PropsWithChildren } from 'react'

import styles from './Wrapper.module.css'

interface WrapperProps {
  className?: string
}

export const Wrapper = ({
  children,
  className,
}: PropsWithChildren<WrapperProps>) => {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>
}
