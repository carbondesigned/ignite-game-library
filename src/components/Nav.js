import React, { useState } from "react"
//Animation
import styled from "styled-components"
import { motion } from "framer-motion"
import logo from "../img/logo.svg"
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction"
import { useDispatch } from "react-redux"
import { fadeIn } from "../animations"

import bg from "../img/header-bg.png"

const Nav = () => {
  const dispatch = useDispatch()
  const [textInput, setTextInput] = useState("")

  const inputHandler = (e) => {
    setTextInput(e.target.value)
  }
  const submitSearch = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(textInput))
    setTextInput("")
  }
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" })
  }
  return (
    <StyledHeader bg={bg} className="header">
      <StyledNav variants={fadeIn} initial="hidden" animate="show">
        <Logo onClick={clearSearched}>
          <img src={logo} alt="logo" />
          <h1>Ignite</h1>
        </Logo>
        <form className="search">
          <input value={textInput} onChange={inputHandler} type="text" />
          <button onClick={submitSearch} type="submit">
            Search
          </button>
        </form>
      </StyledNav>
    </StyledHeader>
  )
}

const StyledHeader = styled(motion.div)`
  width: 100%;
  background-image: url(${(p) => p.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 35vh;
  position: relative;
  background-color: #27272b;
  z-index: 1;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    top: 0;
    left: 0;
    z-index: -1;
  }
`

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    z-index: 1;
    outline: none;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  color: white;
  img {
    height: 2rem;
    width: 2rem;
  }
`

export default Nav
