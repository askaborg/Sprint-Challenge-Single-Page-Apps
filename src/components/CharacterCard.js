import React from "react";

export default function CharacterCard(props) {
  const { name, gender, species } = props.character

  return (
    <span>
      <h4>{name}, {species} {gender}</h4>
    </span>
  )
}
