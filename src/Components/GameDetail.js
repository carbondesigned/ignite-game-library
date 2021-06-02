import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaTimes, FaTimesCircle } from "react-icons/fa"

import { useHistory } from "react-router-dom"

//Redux
import { useSelector } from "react-redux"

const GameDetail = () => {
  const history = useHistory()
  const { screen, game, isLoading } = useSelector((state) => state.detail)

  // Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target
    if (
      element.classList.contains("overlay") ||
      element.classList.contains("close")
    ) {
      document.body.style.overlay = "auto"
      history.push("/")
    }
  }

  return (
    <>
      {!isLoading && (
        <CardShadow className="overlay" onClick={exitDetailHandler}>
          <Detail className="detail">
            <div className="stats">
              <div className="rating">
                <div className="top">
                  <h2> {game.name} </h2>
                  <StyledFaTimes
                    className="close"
                    onClick={exitDetailHandler}
                  />
                </div>
                <p>Rating: {game.rating} </p>
              </div>
              <div className="info">
                <h3 className="platforms-title">Platforms</h3>
                <div className="platforms">
                  {game.platforms &&
                    game.platforms.map((data) => (
                      <h4 key={data.platform.id}> {data.platform.name} </h4>
                    ))}
                </div>
              </div>
            </div>
            <div className="media">
              <img src={game.background_image} alt="image" />
            </div>
            <div className="desc">
              <p> {game.description_raw} </p>
            </div>
            <div className="gallery">
              {screen.results &&
                screen.results.map((screen) => (
                  <img src={screen.image} key={screen.id} alt={screen.image} />
                ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  )
}

const StyledFaTimes = styled(FaTimesCircle)`
  cursor: pointer;
  transition: 100ms;

  &:hover {
    color: #9c0000;
    transform: scale(1.1);
  }
`

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;

  &::-webkit-scrollbar {
    width: 0.75rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7976;
    border: 3px solid white;
    border-radius: 1em;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`

const Detail = styled(motion.div)`
  width: 75%;
  min-height: 80vh;
  background-color: white;
  padding: 2em;
  position: absolute;
  color: black;

  .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2em;
  }

  .stats {
    display: flex;
    flex-direction: column;

    h2 {
      padding: 0;
      margin: 0;
      text-align: left;
    }
  }

  img {
    width: 100%;
    max-height: 75%;
    padding: 2em 0;
  }

  .platforms-title {
    padding-top: 2em;
    text-transform: uppercase;
    color: #414141;
  }

  .platforms {
    display: flex;

    h4 {
      padding: 0 1em 0 0;
    }
  }
`

export default GameDetail
