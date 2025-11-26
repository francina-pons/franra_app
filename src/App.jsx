import { useState } from 'react'
import CodeEntryPage from './CodeEntryPage'
import LetterPage from './LetterPage'
import ChronographyPage from './ChronographyPage'
import QuotesPage from './QuotesPage'
import GalleryPage from './GalleryPage'
import MemesPage from './MemesPage'
import './App.css'

function App() {
  const [unlocked, setUnlocked] = useState(false)
  const [activePage, setActivePage] = useState('letter')

  if (!unlocked) {
    return <CodeEntryPage onUnlock={() => setUnlocked(true)} />
  }

  let pageContent
  switch (activePage) {
    case 'letter':
      pageContent = <LetterPage />
      break
    case 'chronography':
      pageContent = <ChronographyPage />
      break
    case 'quotes':
      pageContent = <QuotesPage />
      break
    case 'gallery':
      pageContent = <GalleryPage />
      break
    case 'memes':
      pageContent = <MemesPage />
      break
    default:
      pageContent = <LetterPage />
  }

  return (
    <div className="anniversary-app">
      <header>
        <h1>Feliç aniversari <span role="img" aria-label="heart" style={{color: '#d62828', fontSize: '1.2em', verticalAlign: 'middle'}}>❤️</span></h1>
      </header>
      <main>
        <div className="categories">
          <button className="category-btn letter" onClick={() => setActivePage('letter')}>Introducció</button>
          <button className="category-btn chronography" onClick={() => setActivePage('chronography')}>Cronografia</button>
          {/* <button className="category-btn quotes" hidden onClick={() => setActivePage('quotes')}>Frases</button>  */}
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
