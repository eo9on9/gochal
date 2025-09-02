import styles from './Trigger.module.css'

interface TriggerProps {
  className?: string
  onClick?: () => void
}

export const Trigger = ({ className, onClick }: TriggerProps) => {
  return (
    <button
      className={`${styles.trigger} ${className}`}
      type="button"
      onClick={onClick}
    >
      Trigger
    </button>
  )
}
