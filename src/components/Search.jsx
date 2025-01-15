import { useEffect, useState } from "react"

const URL = 'www.google.com/api'
const API_KEY = '2j3h5lj6h63ll34l6664llj'

export default function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState("pizza")

    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apikey=${API_KEY}`)
            const data = await res.json()
            setFoodData(data.results)
        }
    },[query])

  return (
    <div>
        <input type="text" onChange={(e)=>setQuery(e.target.value)} value={query}/>
    </div>
  )
}
