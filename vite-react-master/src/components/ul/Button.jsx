import styles from './style/MyButton.module.css'

function MyButton({children}) {
  return (
    <button className={styles.styleForMyButton}>
      {children}
    </button>
  )
}

export default MyButton;