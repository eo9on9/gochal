import { forwardRef, type HTMLAttributes } from 'react'
import styles from './Panel.module.css'

export const Panel = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div className={`${styles.panel} ${className}`} ref={ref} {...props}>
        Panel
      </div>
    )
  },
)

Panel.displayName = 'Panel'
