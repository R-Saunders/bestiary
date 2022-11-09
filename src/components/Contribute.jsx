import React from "react";
import ContributeBtn from "./ContributeBtn";
import SupportBtn from "./SupportBtn"

const Contribute = () => {
	return (
		<section className="contribute">
			<h2 className="contribute_header">How to Contribute</h2>
			<p className="contribute_body">
				There are many ways to contribute to the Bestiary.
				You can catalogue some new beasts, update some existing ones or you can simply support us to help keep the lanterns lit.
			</p>
			<div className="contribute_btn_container">
			<ContributeBtn /><SupportBtn/></div>
		</section>
	);
};

export default Contribute;
