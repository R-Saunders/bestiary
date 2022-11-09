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
					<a href="https://github.com/R-Saunders">
						<i className="fa-brands fa-square-github"></i>
					</a>
					<a href="https://www.linkedin.com/in/rich-saunders/">
						<i className="fa-brands fa-linkedin"></i>
					</a>
					<p>Made by R Saunders</p>
				</div>
			</div>
		</footer>
	);
}
