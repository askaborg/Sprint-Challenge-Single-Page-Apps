import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MyButton = styled.button`
  font-size: 34px;
  border-radius: 5px;
  &:hover {
    background-color: green;
    color: white;
  }
`
export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <div>
          <Link to="/characters" >
            <MyButton>Search Characters</MyButton>
          </Link>           
        </div>     
      </header>
    </section>
  )
}
