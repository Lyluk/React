import styles from './style/MyNavigationMenu.module.css'

function MyNavigationMenu({children}) {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>{children}</div>
        <nav className={styles.menu}>
          <a href="#">С Новым годом!</a>
          <a href="#">Двадцать восемь</a>
          <a href="#">Футер</a>
        </nav>
    </div>
  )
}

export default MyNavigationMenu;