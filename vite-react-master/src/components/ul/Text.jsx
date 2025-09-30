import styles from './style/Text.module.css'

function Text({children}) {
  return (
    <h1 className={styles.styleForText}>
      {children}
    </h1>
  )
}

export default Text;