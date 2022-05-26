import Image from 'next/image'
import styles from '../styles/ProductCard.module.css'

export default function ProductCard() {
  return (
    <div className={styles.container}>
      <Image src="/imgs/pizza.png" alt="product" width="500" height="500" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$17.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  )
}
