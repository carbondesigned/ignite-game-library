import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const SearchGame = () => {
  return (
    <StyledInput>
      <StyledSearch type="text" />
      <StyledButton>Search</StyledButton>
    </StyledInput>
  )
}

const StyledInput = styled(motion.div)`
  display: flex;
  min-width: 30vw;
  padding-top: 2em;
`

const StyledSearch = styled(motion.input)`
  padding: 1em;
  outline: none;
  border: none;
  border-radius: 0.25em;
  background-color: white;
  z-index: 1;
  width: 100%;
`

const StyledButton = styled(motion.button)`
  background-color: #690000;
  outline: none;
  border: none;
  color: white;
  padding: 1em 2em;
  border-radius: 0.25em;
  margin-left: 0.5em;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: #920000;
  }
`

export default SearchGame
