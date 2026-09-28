import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import MovieModal from './MovieModal'

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(res => res.json())
      .then(data => setMovies(data.slice(0, 24)))
  }, []);

  const handleSearch = () => {
    if(search === '') return;
    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then(res => res.json())
      .then(data => setMovies(data.map(i => i.show)))
  }

  return (
    <div>
      <div className="search-box">
        <input type="text" placeholder="Search for a movie..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleSearch} style={{padding:'10px', marginLeft:'10px', background:'#e50914', color:'white', border:'none', borderRadius:'5px'}}>Search</button>
      </div>
      <div className="movie-grid">
        {movies.map(m => <MovieCard key={m.id} movie={m} onDetails={setSelected} />)}
      </div>
      {selected && <MovieModal movie={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
export default MovieList