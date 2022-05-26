import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard'

export default function ProductList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The best pizza in town</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui optio atque sint a quisquam aliquid amet quod minima dicta accusamus facere, quis obcaecati, quam corrupti officia iste omnis iure.
            </p>
            <div className={styles.wrapper}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}
