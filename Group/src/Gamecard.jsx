function GameCard ({ name, milestone, image }) {
  return (
    <div className="game-card">
      {image && <img src={image} alt={name} className="game-img" />}
      <h5>{name}</h5>
      <p>{milestone}</p>
    </div>
  )
}

export default GameCard
