import React from "react";
import Logo from "../imgs/Bestiary.png";
import RandomBtn from "./RandomBtn";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<React.Fragment>
			<header>
				<div className="header_inner">
					<Link to="/">
						<div className="header_left">
							<img src={Logo} alt="Bestiary Logo" className="logo" />
							<h2>Bestiary</h2>
						</div>
					</Link>
					<div className="header_right">
						<RandomBtn />
						<input className="search_box" type="text" placeholder="Search" />
					</div>
				</div>
			</header>
		</React.Fragment>
	);
}
