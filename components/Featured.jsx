import Image from 'next/image'
import styles from '../styles/Featured.module.css'

export default function Featured() {

  const imgs = [
    "/imgs/featured.jpg",
    "/imgs/featured1.jpg",
    "/imgs/featured2.jpg"
  ]

  return (
    <div className={styles.container}>
      <Image src="/imgs/arrowl.png" alt="" layout='fill'/>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {
            imgs.map((img, i) => {
              <Image src={img} alt="" key={i} layout='fill'/>
            })
          }
        </div>
      </div>
      <Image src="/imgs/arrowr.png" alt="" layout='fill'/>
    </div>
  )
}
