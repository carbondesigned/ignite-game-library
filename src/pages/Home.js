import React, { useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

//Redux
import { useDispatch, useSelector } from "react-redux"
import { loadGames } from "../actions/gamesAction"

//Components
import Game from "../Components/Game"

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])
  //Get Data
  const { popular, newGames, upcoming } = useSelector((state) => state.games)
  return (
    <div className="home-wrapper">
      <GameList>
        <h1>Ignite - Search for any game any time.</h1>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              releaseDate={game.released}
              src={game.background_image}
              id={game.id}
              key={game.id}
              rating={game.rating}
            ></Game>
          ))}
        </Games>
      </GameList>
    </div>
  )
}

const GameList = styled(motion.div)`
  padding: 1em;
`

const Games = styled(motion.div)`
  padding: 2em;
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`

export default Home
