import React from 'react'
import Data from '../data/beasts.json'
import BeastCard from './BeastCard'

export default function BeastList() {
  return <React.Fragment>
    { Data.beasts.map( 
      (beast, index) => <BeastCard key={index} beast={beast}/>
    )}
  </React.Fragment>
}