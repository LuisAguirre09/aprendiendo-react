import { useState } from 'react'
import './App.css'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Headers'


function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' || 
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filterProducts(filteredProducts)}/>
    </>
    
  )
}

export default App
