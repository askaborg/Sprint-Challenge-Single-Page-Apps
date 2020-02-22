import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  const{characterList, searchList} = props
  const [search, createSearch] = useState({value: ""})
  const [cast, updateCast] = useState([]);

  const updateSearch = update => createSearch({value: update.target.value})

  const submitSearch = nameList => {
    nameList.preventDefault()
    searchList(cast.filter(list => list.name.includes(search.value) || (search.value === "")))
  }

  useEffect(() => updateCast(characterList), [])
 
  return (
    <section className="search-form">
        <form onSubmit={submitSearch}>
          <label>
            <input type="text" name="name" onChange={updateSearch} />
          </label>
            <input type="submit" value="Search by name" />
        </form>
    </section>
  )
}
