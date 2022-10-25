import React from "react";
import ContributeBtn from "./ContributeBtn";

const Contribute = () => {
	return (
		<section className="contribute">
			<h2>How to Contribute</h2>
			<p>
				There are many ways to contribute to the Bestiary.
				You can catalogue some new beasts, update some existing ones or you can simply support us to help keep the lanterns lit.
			</p>
			<ContributeBtn />
		</section>
	);
};

export default Contribute;
