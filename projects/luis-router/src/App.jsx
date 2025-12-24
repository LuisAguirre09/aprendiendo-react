import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'

function navigate (href) {
  window.history.pushState({}, '', href)
  // crear un evento personalizado
  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function HomePage() {

  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear un React Route desde cero</p>
      <a href="/about">Ir sobre Nosotros</a>
    </>
  )
}

function AboutPage() {

  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://pbs.twimg.com/profile_images/1638797407113691137/KZ3RfAKz_400x400.jpg" alt="Foto de luis" />
      </div>
      <p>Hola! Me llamo Luis Alfredo y estoy creando un clon de React Router</p>
      <a href="/">Ir a Home</a>
    </>
  )
}


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window
    }
  }, [])

  return (
    <main>
      { currentPath === '/' && <HomePage />}
      { currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
