import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Product() {

    const [size, setSize] = useState(0)

    const pizza = {
        id: 1,
        img: "/imgs/pizza.png",
        name: "campagnola",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, odio, mollitia corrupti, dolores non officia dicta placeat quis nulla temporibus magni ipsam esse reprehenderit sapiente est doloremque blanditiis provident rerum?"
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} layout='fill' alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>$ {pizza.price[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image src="/imgs/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(1)}>
                        <Image src="/imgs/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(2)}>
                        <Image src="/imgs/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input type="checkbox" name="double" id="double" className={styles.checkbox} />
                        <label htmlFor="double">Double Ingredients</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" name="cheese" id="cheese" className={styles.checkbox} />
                        <label htmlFor="cheese">Extra Cheese</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" name="spicy" id="spicy" className={styles.checkbox} />
                        <label htmlFor="spicy">Spicy Sauce</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" name="garlic" id="garlic" className={styles.checkbox} />
                        <label htmlFor="garlic">Garlic Sauce</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}>add to cart</button>
                </div>
            </div>
        </div>
    )
}
