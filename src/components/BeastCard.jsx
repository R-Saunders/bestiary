import React from "react";

export default function BeastCard({beast}) {
  return(
    <React.Fragment>
      <img src={beast.hero_image} alt={beast.name}></img>
      <h3>{beast.name}</h3>
    </React.Fragment>
  )
  
}