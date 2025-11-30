import { useState } from 'react'
import CodeEntryPage from './CodeEntryPage'
import IntroPage from './IntroPage'
import ChronographyPage from './ChronographyPage'
import GalleryPage from './GalleryPage'
import MemesPage from './MemesPage'
import './App.css'

function App() {
  const [unlocked, setUnlocked] = useState(false)
  const [activePage, setActivePage] = useState('intro')

  if (!unlocked) {
    return <CodeEntryPage onUnlock={() => setUnlocked(true)} />
  }

  let pageContent
  switch (activePage) {
    case 'intro':
      pageContent = <IntroPage />
      break
    case 'chronography':
      pageContent = <ChronographyPage />
      break
    case 'gallery':
      pageContent = <GalleryPage />
      break
    case 'memes':
      pageContent = <MemesPage />
      break
    default:
      pageContent = <IntroPage />
  }

  return (
    <div className="anniversary-app">
      <header>
        <h1>Feliç aniversari <span role="img" aria-label="heart" className="heart-icon">❤️</span></h1>
      </header>
      <main>
        <div className="categories">
          <button className="category-btn intro" onClick={() => setActivePage('intro')}>Introducció</button>
          <button className="category-btn chronography" onClick={() => setActivePage('chronography')}>Cronografia</button>
          <button className="category-btn gallery" onClick={() => setActivePage('gallery')}>Galeria</button>
          <button className="category-btn memes" onClick={() => setActivePage('memes')}>Memes</button>
        </div>
        <section className="category-content">
          {pageContent}
        </section>
      </main>
      <footer>
        <p>Esper que t'agradi</p>
      </footer>
    </div>
  )
}

export default App
