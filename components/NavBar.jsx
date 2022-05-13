import Image from 'next/image'
import styles from '../styles/NavBar.module.css'

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>

        <div className={styles.callbtn}>
          <Image src="/imgs/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>0123456</div>
        </div>

      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>

          <Image src="/imgs/logo.png" width="160px" height="68px" alt="" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/imgs/cart.png" width="30px" height="30px" alt="" />
          <div className={styles.counter}>
            2
          </div>
        </div>
      </div>
    </div>
  )
}
