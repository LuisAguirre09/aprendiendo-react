import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`;
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();

    // Para recuperar la cita al cargar la pagina
    useEffect(() =>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            setFact(data.fact)

           
            });
    }, [])

    // para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if(!fact) return
        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords);

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
            .then(res => res.json()
            .then(response => {
                const { url } = response
                setImageUrl(url)
                // console.log(response)
            }))
    }, [fact])


    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={`${imageUrl}`} alt={`Image extrated using the firts three words ${fact}`} />}
            </section>
        </main>
    )
}