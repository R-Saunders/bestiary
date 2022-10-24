import React from "react";
import Logo from "../imgs/Bestiary.png";
import RandomBtn from "./RandomBtn";
import HeaderBackground from "../imgs/Header_Background.png"

export default function Header() {
	return (
		<React.Fragment>
			<header>
				<div className="header_inner">
					<div className="header_left">
						<img src={Logo} alt="Bestiary Logo" className="logo" />
						<h2>Bestiary</h2>
					</div>
					<div className="header_right">
						<RandomBtn />
						<input className="search_box" type="text" placeholder="Search" />
					</div>
				</div>
			</header>
		</React.Fragment>
	);
}
