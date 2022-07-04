import Image from 'next/image'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>

      <div className={styles.item}>
        <Image src="/imgs/bg.png" layout='fill' alt='' />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            oh yes, we did? the pizza, well baked slice of pizza
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            find our restaurants
          </h1>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br />(602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br />(602) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br />(602) 867-1013
          </p>

        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>working hours</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 00:00
          </p>
        </div>
      </div>
    </div>
  )
}
