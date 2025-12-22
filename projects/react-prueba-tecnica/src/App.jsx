import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./services/facts.js";
import { useCatImage } from "./hooks/useCatimage.js";


const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

const useCatFact = () => {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    // Para recuperar la cita al cargar la pagina
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}

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