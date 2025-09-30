import styles from './style/Img.module.css'

function Img({children}) {
  return (
    <img src={children} alt='1' className={styles.styleForImg} />
  )
}

export default Img;