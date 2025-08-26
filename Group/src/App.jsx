import './App.css'
import Header from './Header'
import ProfileCard from './Profilecard'


import Yuta from "./assets/Yuta.jpg";
import Alden from "./assets/Alden.jpg";

import Valo from "./assets/Valo.jpg";
import Lol from "./assets/Lol.jpg";
import MLBB from "./assets/MLBB.jpg";
import Pokemon from "./assets/Pokemon.jpg";
import PokemonU from "./assets/PokemonU.jpg";
import PokemonS from "./assets/PokemonS.jpg";


function App() {
  const games = [
    { name: "Valorant", milestone: "Reached Rank: Platinum 1 ", image: Valo },
    { name: "League of Legends", milestone: "Reached Rank:  Gold ", image: Lol },
    { name: "Mobile Legends: Bang Bang", milestone: "Reached Rank:  Mythical Glory ", image: MLBB },
    { name: "Pokémon Legends: Arceus", milestone: "Completed Pokédex ", image: Pokemon  },
    { name: "Pokémon UNITE", milestone: "Reached Rank:  Master ", image: PokemonU },
    { name: "Pokémon Sword and Shield", milestone: "Completed Pokédex ", image: PokemonS },
  ]

  return (
    <div className="app-wrapper">
      <Header logo={Alden} teamName="Shadow Garden" />

      <div className="app-container">
        <ProfileCard 
          teamName="Shadow Garden"
          logo={Alden}
          profilePic={Yuta}
          realName="John Mico Alumbres"
          ign="Maou"
          games={games}
        />
      </div>
    </div>
  )
}

export default App
