import styles from './style/Footer.module.css'

function Footer({children}) {
  return (
    <footer className={styles.styleForFooter}>
      <h1>
        {children}
      </h1>
    </footer>
  )
}

export default Footer;