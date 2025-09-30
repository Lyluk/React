import styles from './style/Flex.module.css'

function Flex() {
  return (
    <div className={styles.styleForFlex}>
      <div className='flex-item'>
        <img src="https://sun9-53.userapi.com/s/v1/ig2/BSnExDVTz9Zn3rtSjuKS5xUkZyp_iK1T0DXOkopf0fDungX6wAOsDA35ykKGk71ZRK4mXFKcxaOeptYOwdKapRbF.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x284,240x427,360x640,480x853,540x960,640x1138,720x1280,1080x1920,1152x2048&from=bu&cs=1152x0" alt="1" />
        <button>Цифровой</button>
      </div>
      <div className='flex-item'>
        <img src="https://sun9-52.userapi.com/s/v1/ig2/ApN_Q4ZrFMiwqyBdYrGaqymykXp1KVgA2ZlOeJqndPWZOuiR5WqADABaRRDJJU-LxvnjHLxcHMkXyNf7zQRPSzet.jpg?quality=95&as=32x57,48x85,72x128,108x192,160x284,240x427,360x640,480x853,540x960,640x1137,720x1280,736x1308&from=bu&cs=736x0" alt="1" />
        <button>Элемент</button>
      </div>
      <div className='flex-item'>
        <img src="https://sun9-19.userapi.com/s/v1/ig2/5wsPJHRkNENE8mdX3T4VzHNMKNUfAWSRC764o_rxlitgbnaO3e_eCbVkBIzuttFtpztPpR24lt1SZAkTbKL8Yp2H.jpg?quality=95&as=32x34,48x52,72x77,108x116,160x172,240x258,360x387,480x516,540x580,640x688,720x774,735x790&from=bu&cs=735x0" alt="1" />
        <button>Цифровой</button>
      </div>
    </div>
  )
}

export default Flex;