import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

//Redux
import { useDispatch } from "react-redux"
import { loadDetail } from "../actions/detailAction"
import { Link } from "react-router-dom"

const Game = ({ name, releaseDate, src, id, rating }) => {
  // Load Detail
  const dispatch = useDispatch()
  const loadDetailHandler = () => {
    dispatch(loadDetail(id))
  }
  return (
    <StyledGameComponent onClick={loadDetailHandler}>
      <StyledLink to={`/game/${id}`}>
        <StyledCoverImg className="game-img" src={src} alt="" />
        <StyledGameInfo className="game-info">
          <p className="released-title">Release Date</p>
          <p> {releaseDate} </p>
          <div className="bottom-section">
            <h3 className="game-title"> {name} </h3>
            <h4 className="game-rating"> {rating} </h4>
          </div>
        </StyledGameInfo>
      </StyledLink>
    </StyledGameComponent>
  )
}

const StyledGameComponent = styled(motion.div)`
  border-radius: 1em;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  min-height: 30vh;
  transition: 300ms;

  &:hover {
    transform: scale(1.025);

    .game-img {
      transform: translateY(-10px) scale(1.015);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.75);
    }
  }

  .game-img {
    transition: 300ms;
  }

  .game-info {
    transition: 300ms;
  }

  .bottom-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5em;

    .game-rating {
      font-weight: 400;
    }
  }

  .released-title {
    text-transform: uppercase;
    color: #414141;
    font-weight: 700;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledCoverImg = styled(motion.img)`
  width: 100%;
  border-radius: 1em;
  object-fit: cover;
  height: 75%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
`

const StyledGameInfo = styled(motion.div)`
  padding: 1em 2em 10em;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;

  .game-title {
    color: #1a1a1a;
    font-size: clamp(1.1em, 3vw, 1.65em);
  }
`

export default Game
