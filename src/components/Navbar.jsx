const Navbar = ({ setPage }) => {
  return (
    <div className="navbar">
      <h2>🎬 MovieExplorer</h2>
      <button onClick={() => setPage('movies')}>Movies</button>
    </div>
  )
}
export default Navbar