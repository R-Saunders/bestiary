import React from "react";
import SupportBtn from "./SupportBtn";

export default function Footer() {
	return (
		<footer>
			<div className="footer_inner">
				<div className="footer_top">
					<SupportBtn />
					<div className="social_icons">
						<i className="fa-brands fa-square-facebook"></i>
						<i className="fa-brands fa-square-instagram"></i>
						<i className="fa-brands fa-square-twitter"></i>
					</div>
				</div>
				<div className="footer_bottom">
					<i className="fa-brands fa-square-github"></i>
					<i className="fa-brands fa-linkedin"></i>
					<p>Made by R Saunders</p>
				</div>
			</div>
		</footer>
	);
}
