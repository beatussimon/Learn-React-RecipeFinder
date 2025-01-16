import { useEffect, useState } from "react"
import styles from './fooddetails.module.css'

export default function FoodDetails({foodId}) {
    const [food, setFood] = useState({})
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`

    const API_KEY = '720b8436255344b4b49d0bb6cbdee1f7'

    useEffect(()=>{
        async function fetchFood(){
            const response =await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await response.json();
            setFood(data)
            console.log(data)
        }

        fetchFood()
    }, [foodId])

  return (
<div className={styles.recipeContainer}>
    <h2 className={styles.recipeTitle}>{food.title}</h2>
    <div className={styles.recipeDetails}>
        <span className={styles.foodId}>ID: {foodId}</span>
        <div className={styles.imageContainer}>
            <img src={food.image} alt={food.title} className={styles.recipeImage} />
        </div>
        <div className={styles.additionalInfo}>
            <h3 className={styles.additionalInfoTitle}>Recipe Information</h3>
            <p><strong>Servings:</strong> {food.servings}</p>
            <p><strong>Ready in:</strong> {food.readyInMinutes} minutes</p>
            <p><strong>Health Score:</strong> {food.healthScore}</p>
            {food.vegetarian && <p>This recipe is vegetarian.</p>}
            {food.vegan && <p>This recipe is vegan.</p>}
            {food.glutenFree && <p>This recipe is gluten-free.</p>}
        </div>
        <div className={styles.instructionsContainer}>
            <h3 className={styles.instructionsTitle}>Preparation Steps</h3>
            {food.instructions ? (
                <ol className={styles.instructionsList}>
                    {food.instructions.replace(/<\/?[^>]+(>|$)/g, "").split('.').map((step, index) => (
                        <li key={index} className={styles.instructionStep}>
                            {step.trim()}
                        </li>
                    ))}
                </ol>
            ) : (
                <p className={styles.noInstructions}>No preparation steps available.</p>
            )}
        </div>
    </div>
</div>
  )
}
