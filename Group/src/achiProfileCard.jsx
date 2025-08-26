import GameCard from './Gamecard'
import Header from './Header'   

function ProfileCard({ teamName, logo, profilePic, realName, ign, games }) {
  return (
    <div className="profile-card">

      <Header logo={logo} teamName={teamName} />

      <div className="profile-info">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h3>{realName}</h3>
        <p className="ign">IGN: {ign}</p>
      </div>

      <div className="games-section">
        <h4>My Games:  </h4>
        {games.length > 0 ? (
          <div className="games-list">
            {games.map((game, index) => (
              <GameCard 
                key={index} 
                name={game.name} 
                milestone={game.milestone} 
                image={game.image}
              />
            ))}
          </div>
        ) : (
          <p>No games added Yet...</p>
        )}
      </div>
    </div>
  )
}

export default achiProfileCard
