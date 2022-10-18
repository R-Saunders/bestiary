import React from "react";
import SupportBtn from "./SupportBtn";

export default function Footer() {
	return (
		<footer>
			<div>
				<SupportBtn />
				<div>
					<i className="fa-brands fa-square-facebook"></i>
					<i className="fa-brands fa-square-instagram"></i>
					<i className="fa-brands fa-square-twitter"></i>
				</div>
			</div>
			<div>
				<i className="fa-brands fa-square-github"></i>
				<i className="fa-brands fa-linkedin"></i>
				<p>Made by R Saunders</p>
			</div>
		</footer>
	);
}
