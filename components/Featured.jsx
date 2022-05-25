import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Featured.module.css'

export default function Featured() {

  const [index, setIndex] = useState(0)

  const imgs = [
    "/imgs/featured.jpg",
    "/imgs/featured1.jpg",
    "/imgs/featured2.jpg"
  ]

  const handleSlide = (direction) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2)
    }
    if (direction === 'r') {
      setIndex(index !== 2 ? index + 1 : 0)
    }
  }
  console.log(index);
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleSlide('l')}>
        <Image src="/imgs/arrowl.png" alt="" layout='fill' objectFit='contain' />
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {
          imgs.map((img, i) =>
            <div className={styles.imgContainer} key={i}>
              <Image src={img} alt="featured" layout='fill' objectFit='contain' />
            </div>
          )
        }
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleSlide('r')}>
        <Image src="/imgs/arrowr.png" alt="" layout='fill' objectFit='contain' />
      </div>
    </div>
  )
}
