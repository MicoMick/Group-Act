function Header({ logo, teamName }) {
  return (
    <div className="header">
      <img src={logo} alt="Team Logo" className="logo" />
      <h2>{teamName}</h2>
    </div>
  )
}

export default achiHeader
