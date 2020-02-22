import React, { useEffect, useState } from "react";
import axios from 'axios'

import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, createCharacterList] = useState([])
  const [displayCharacters, createDisplayCharacters] = useState([])
  const [apiError, createApiError] = useState([])

  function searchList(listing) {
      createDisplayCharacters(listing)
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then(responseRickAndMorty => {
        createCharacterList(responseRickAndMorty.data.results)
        createDisplayCharacters(responseRickAndMorty.data.results)
    })
    .catch(errorRickAndMorty => createApiError(errorRickAndMorty))
  }, [])

  const gotCharacterList = (characterList.length !== 0 ) ? true : false
  const gotError = (apiError.message !== undefined) ? true : false

  if (gotCharacterList) return (
      <section className="character-list">
      <SearchForm searchList={searchList} characterList={characterList}/>
      {displayCharacters.map((character, index) => <div key={index}><CharacterCard character={character} /></div>)}
      </section>
  )
  else if (gotError) return <p>{apiError.message}</p>
  else return <></>
}
