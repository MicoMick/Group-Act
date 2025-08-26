import './App.css'
import Header from './Header'
import ProfileCard from './Profilecard'
import achiHeader from './achiHeader'
import achiProfileCard from './achiProfileCard'


import Yuta from "./assets/Yuta.jpg";
import Alden from "./assets/Alden.jpg";
import raccoon from "./assets/raccoon.jpg"

import Valo from "./assets/Valo.jpg";
import Lol from "./assets/Lol.jpg";
import MLBB from "./assets/MLBB.jpg";
import Pokemon from "./assets/Pokemon.jpg";
import PokemonU from "./assets/PokemonU.jpg";
import PokemonS from "./assets/PokemonS.jpg";
import rdr2 from "./assets/rdr2.jpg"
import eldenRing from "./assets/eldenRing.jpg"
import mhw from "./assets/mhw.jpg"
import gow from "./assets/gow.jpg"
import bioshock from "./assets/bioshock.jpg"


function App() {
  const games = [
    { name: "Valorant", milestone: "Reached Rank: Platinum 1 ", image: Valo },
    { name: "League of Legends", milestone: "Reached Rank:  Gold ", image: Lol },
    { name: "Mobile Legends: Bang Bang", milestone: "Reached Rank:  Mythical Glory ", image: MLBB },
    { name: "Pokémon Legends: Arceus", milestone: "Completed Pokédex ", image: Pokemon  },
    { name: "Pokémon UNITE", milestone: "Reached Rank:  Master ", image: PokemonU },
    { name: "Pokémon Sword and Shield", milestone: "Completed Pokédex ", image: PokemonS },
  ]

  const games = [
    { name: "Valorant", milestone: "Reached Rank: Platinum 2", image: Valo },
    { name: "Red Dead Redemption 2", milestone: "Finished it", image: rdr2 },
    { name: "Elden Ring", milestone: "Finished it and Killed all Bosses", image: eldenRing },
    { name: "Monster Hunter World", milestone: "Beat Alatreon and Fatalis", image: mhw  },
    { name: "God of War", milestone: "Finished it", image: gow },
    { name: "Bioshock the Collection", milestone: "Completed the Game", image: bioshock },
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

      <Header logo={Alden} teamName="Shadow Garden" />

      <div className="app-container">
        <ProfileCard 
          teamName="Shadow Garden"
          logo={Alden}
          profilePic={raccoon}
          realName="Achilles Lorenzo Chico"
          ign="Bicol Express"
          games={games}
        />
      </div>
    </div>

    
  )
}

export default App
