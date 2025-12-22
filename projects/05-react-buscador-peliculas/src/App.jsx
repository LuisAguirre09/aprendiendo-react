import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'
import { Movies } from './components/Movies';

export function useMovies() {
  const movies = responseMovies.Search; 

  const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
  }))

  return { movies: mappedMovies }
}

function App() {

  const { movies: mappedMovies } = useMovies()

  return (
    <div className='page'>
      <header>
          <h1>Buscador de peliculas</h1>
          <form className='form'>
            <input type="text" placeholder='Superman, Spider - Man, ' />
            <button type='submit'>Burcar</button>
          </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
