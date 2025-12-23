import './App.css'
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { useEffect, useRef, useState } from 'react';


function App() {

  const { movies } = useMovies()
  const inputRef = useRef()
  const [query, setQuery] = useState('')
  const (error, setError) = useState(null)

  console.log('render');

  const handleSubmit = (event) => {
      event.preventDefault()
      // const { query } = Object.fromEntries(new window.FormData(event.target))
      console.log({query})
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    if(query === ''){
        setError('No se puede buscar un pelicula vacia')
    }
  }, [search])

  return (
    <div className='page'>
      <header>
          <h1>Buscador de peliculas</h1>
          <form className='form' onSubmit={handleSubmit}>
            <input onChange={handleChange} value={query} name='query' type="text" placeholder='Superman, Spider - Man, ' />
            <button type='submit'>Burcar</button>
          </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
