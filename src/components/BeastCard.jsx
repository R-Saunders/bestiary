import React from "react";

export default function BeastCard({props}) {
  return(
    <React.Fragment>
      <img src={props.hero_image} alt={props.name}></img>
      <h3>{props.name}</h3>
    </React.Fragment>
  )
}