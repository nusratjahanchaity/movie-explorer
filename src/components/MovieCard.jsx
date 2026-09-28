const MovieCard = ({ movie, onDetails }) => {
  return (
    <div className="card">
      <img src={movie.image ? movie.image.medium : 'https://via.placeholder.com/210x295'} alt="" />
      <div className="card-body">
        <h3>{movie.name}</h3>
        <p>⭐ {movie.rating.average || 'N/A'} • 📅 {movie.premiered ? movie.premiered.slice(0,4) : 'N/A'}</p>
        <button onClick={() => onDetails(movie)}>See Details</button>
      </div>
    </div>
  )
}
export default MovieCard