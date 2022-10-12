import Desc from './BeastDesc';
import Data from '../data/beasts.json'
import Name from './BeastName';
import React from 'react';

export default function Blurb(){
  return(
    <div>
      { Data.beasts.map(
        (props, index) => (
          <React.Fragment>
            <Name key={index} props={props}/>
            <Desc key={index} props={props}/>
          </React.Fragment>
        )
      )}
    </div>
  )
}