import React from 'react'
import Data from '../data/beasts.json'
import BeastCard from './BeastCard'

export default function BeastList() {
  return <React.Fragment>
    { Data.beasts.map( 
      (props, index) => <BeastCard key={index} props={props}/>
    )}
  </React.Fragment>
}