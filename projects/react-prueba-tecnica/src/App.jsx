import { useEffect, useState } from "react"
import './App.css'
import { useCatImage } from "./hooks/useCatimage.js";
import { useCatFact } from "./hooks/useCatFact.js";


const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
    // const [fact, setFact] = useState();
    const { fact, refreshFact} = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={`${imageUrl}`} alt={`Image extrated using the firts three words ${fact}`} />}
            </section>
        </main>
    )
}