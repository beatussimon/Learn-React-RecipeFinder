import { useEffect, useState } from "react"
import styles from './search.module.css'

const URL = 'https://api.spoonacular.com/recipes/complexSearch'
const API_KEY = '720b8436255344b4b49d0bb6cbdee1f7'

export default function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState("pizza")

    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json()
            setFoodData(data.results)
            console.log(data.results)
        }
        fetchFood()
    },[query])

  return (
    <div className={styles.searchContainer}>
        <input className={styles.input} type="text" onChange={(e)=>setQuery(e.target.value)} value={query}/>
    </div>
  )
}
