import GameCard from './Gamecard'
import Header from './Header'   

function ProfileCard({ teamName, logo, profilePic, realName, ign, games }) {
  
  const stats = {
    hours: 1200,
    games: games.length,
    achievements: 45
  }

  return (
    <div className="profile-card">

      <Header logo={logo} teamName={teamName} />

      <div className="profile-info">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h3>{realName}</h3>
        <p className="ign">IGN: {ign}</p>
      </div>

      {/* Profile Stats Section */}
      <div className="profile-stats">
        <div className="stat">
          <h4>{stats.hours}</h4>
          <p>Hours of Play</p>
        </div>
        <div className="stat">
          <h4>{stats.games}</h4>
          <p>Games</p>
        </div>
        <div className="stat">
          <h4>{stats.achievements}</h4>
          <p>Achievements</p>
        </div>
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

export default ProfileCard
