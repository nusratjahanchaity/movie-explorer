const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <img src={movie.image?.original} alt="" />
        <div className="modal-content">
          <h2>{movie.name}</h2>
          <p>⭐ Rating: {movie.rating.average} | 📅 {movie.premiered}</p>
          <p><b>Genre:</b> {movie.genres.join(', ')}</p>
          <div dangerouslySetInnerHTML={{__html: movie.summary}}></div>
          <button onClick={onClose} style={{marginTop:'10px', padding:'8px 15px', background:'#111', color:'white', border:'none'}}>Close</button>
        </div>
      </div>
    </div>
  )
}
export default MovieModal