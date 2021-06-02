import React, { useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"

//Redux
import { useDispatch, useSelector } from "react-redux"
import { loadGames } from "../actions/gamesAction"

//Components
import Game from "../Components/Game"
import Hero from "../Components/Hero"
import heroBg from "../img/header-bg.png"

import GameDetail from "../Components/GameDetail"

const Home = () => {
  //Current location
  const location = useLocation()
  const pathId = location.pathname.split("/")[2]

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])
  //Get Data
  const { popular, newGames, upcoming } = useSelector((state) => state.games)
  return (
    <GameList>
      <Hero src={heroBg} />

      {pathId && <GameDetail />}

      <h2>Upcoming Games</h2>
      <Games>
        {upcoming &&
          upcoming.map((game) => (
            <Game
              name={game.name}
              releaseDate={game.released}
              src={game.background_image}
              id={game.id}
              key={game.id}
              rating={game.rating}
            />
          ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular &&
          popular.map((game) => (
            <Game
              name={game.name}
              releaseDate={game.released}
              src={game.background_image}
              id={game.id}
              key={game.id}
              rating={game.rating}
            />
          ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames &&
          newGames.map((game) => (
            <Game
              name={game.name}
              releaseDate={game.released}
              src={game.background_image}
              id={game.id}
              key={game.id}
              rating={game.rating}
            />
          ))}
      </Games>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  h2 {
    font-size: clamp(2em, 3vw, 3.5em);
    padding: 1em;
  }
`

const Games = styled(motion.div)`
  padding: 1em 2em;
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

  @media only screen and (max-width: 596px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`

export default Home
