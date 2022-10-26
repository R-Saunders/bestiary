import Hero1 from "../imgs/hero1.png";
import Hero2 from "../imgs/hero2.png";
import Hero3 from "../imgs/hero3.png";
import Hero4 from "../imgs/hero4.png";

import Carousel from "react-bootstrap/Carousel";

const HeroImg = () => {
	return (
		<Carousel controls={false} indicators={false}>
			<Carousel.Item>
				<img className="d-block carousel_img" src={Hero1} alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block carousel_img" src={Hero2} alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block carousel_img" src={Hero3} alt="Third slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block carousel_img" src={Hero4} alt="Third slide" />
			</Carousel.Item>
		</Carousel>
	);
};
export default HeroImg;
