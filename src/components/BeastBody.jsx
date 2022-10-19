import Data from "../data/beasts.json"

const BeastBody = () => {
	return(<div> {Data.beasts.map((props, index) => (
    <p key={index}>{props.body}</p>
  ))}</div>)
};

export default BeastBody;
