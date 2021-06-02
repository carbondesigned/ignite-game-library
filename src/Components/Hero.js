import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import SearchGame from "./SearchGame"

const Hero = ({ src }) => {
  return (
    <StyledHeroSection>
      <div className="hero-text">
        <h1>
          Ig<span>nite</span>
        </h1>
        <h3>Search about any game any time any where.</h3>
      </div>
      <div className="search-input">
        <SearchGame />
      </div>
      <img src={src} alt="" className="header-bg" />
    </StyledHeroSection>
  )
}

const StyledHeroSection = styled(motion.section)`
  width: 100%;
  height: 40vh;
  background-color: #141518;
  margin: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  h1 {
    font-size: clamp(1.5em, 3vw, 2.5em);
    position: relative;
    text-align: center;
    margin-bottom: 0.2em;
  }

  .hero-text {
    z-index: 1;
    text-align: center;
  }

  .search-input {
    z-index: 1;
    display: flex;
  }

  .header-bg {
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
    object-position: center;
    position: absolute;
    pointer-events: none;
  }
`

export default Hero
