import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contribute from "../components/Contribute";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Layout = () => {
	return (
		<React.Fragment>
			<Header />
			<Outlet />
			<Contribute />
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
