import Data from '../data/beasts.json'
import BeastCard from './BeastCard'

export default function BeastList() {
  return <div>
    { Data.beasts.map( 
      (beast, index) => <BeastCard key={index} beast={beast}/>
    )}
  </div>
}