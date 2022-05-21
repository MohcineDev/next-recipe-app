import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Featured.module.css'

export default function Featured() {

  const [index, serIndex] = useState(0)

  const imgs = [
    "/imgs/featured.jpg",
    "/imgs/featured1.jpg",
    "/imgs/featured2.jpg"
  ]

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image src="/imgs/arrowl.png" alt="" layout='fill' />
      </div>
      <div className={styles.wrapper}>
        {
          imgs.map((img, i) =>
            <div className={styles.imgContainer} key={i}>
              <Image src={img} alt="featured" layout='fill' objectFit='contain' />
            </div>
          )
        }
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image src="/imgs/arrowr.png" alt="" layout='fill' />
      </div>
    </div>
  )
}
