const Hero = ({ setPage }) => {
  return (
    <div className="hero">
      <h1>DISCOVER MOVIES</h1>
      <p>Explore and discover your favorite movies from around the world.</p>
      <button onClick={() => setPage('movies')}>Explore Now</button>
    </div>
  )
}
export default Hero