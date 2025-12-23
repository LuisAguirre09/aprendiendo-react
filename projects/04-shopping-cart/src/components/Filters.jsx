import { useState } from 'react'
import './Filters.css'
export function Filters({onChange}) {
    const [minPrice, setMinPrice] = useState(0)
    
    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    return (
        <section className='filters'>
            <div>
                <label htmlFor="price">Precio a partir de:</label>
                <span>${minPrice}</span>
                <input 
                    type="range" 
                    id="price"  
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
              
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">todas</option>
                    <option value="groceries">Portatiles</option>
                    <option value="beauty">Belleza</option>
                </select>
            </div>
        </section>
    )
}