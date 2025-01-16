import { useEffect, useState } from "react"
import styles from './fooddetails.module.css'

export default function FoodDetails({foodId}) {
    const [food, setFood] = useState({})
    const[isloading, setIsLoading] =useState(true)
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`

    const API_KEY = '720b8436255344b4b49d0bb6cbdee1f7'

    useEffect(()=>{
        async function fetchFood(){
            const response =await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await response.json();
            setFood(data)
            console.log(data)
            setIsLoading(false)
        }

        fetchFood()
    }, [foodId])

  return (
    <div>
        <div>
            <h1>{food.title}</h1>
            <img src={food.image} alt="" />
        </div>
            <div>
            <span><strong>🕧{food.readyInMinutes}Minutes</strong></span>
            <span>👪<strong>Serves {food.servings}</strong></span>
            <span>{food.vegetarian?'🥕 Vegetarian': '🍖 Non-Vegetarian'}</span>
            <span>{food.vegan? '🐮 Vegan': ''}</span>
        </div>

        <div>
            💲 {food.pricePerServing/100} Per Serving
        </div>

        <div>
            <h2>Instructions:</h2>
            {isloading? <p>Loading</p> : food.analyzedInstructions[0].steps.map((step)=>(<h1 key={food.id}>step.step</h1>)) }
        </div>
    </div>
  )
}
