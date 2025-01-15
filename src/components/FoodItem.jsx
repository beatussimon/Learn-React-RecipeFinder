import styles from './foodItem.module.css'

export default function FoodItem({food}) {
  return (
    <div className={styles.itemContainer}>
        <img className={styles.itemImage} src={food.image} alt="" />
        <div className={styles.itemContent}>
            <p>{food.title}</p>
        </div>
        <div className={styles.buttonContainer}>
            <button className={styles.itemButton}>View Recipe</button>
        </div>
    </div>
  )
}
