import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MovieList from './components/MovieList'

function App() {
  const [page, setPage] = useState('home');
  return (
    <div>
      <Navbar setPage={setPage} />
      {page === 'home' ? <Hero setPage={setPage} /> : <MovieList />}
      <footer className="footer">
        <p>© 2026 MovieExplorer</p>
      </footer>
    </div>
  )
}
export default App