import React from "react";
import axios from "axios";

const EntryForm = () => {
	const formSubmitted = async (event) => {
		event.preventDefault();
		const _name = event.target.name.value;
		const _location = event.target.location.value;
		const _mythology = event.target.mythology.value;
		const _characteristics = event.target.characteristics.value;
		const _image = event.target.image.value;
		const _content = event.target.content.value;

		const obj = {
			name: _name,
			location: _location,
			mythology: _mythology,
			characteristics: _characteristics,
			image: _image,
			content: _content,
		};

		try {
			await axios.post("http://localhost:8989/create", obj);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main>
			<section className="entry_form_container">
				<div
					id="torn_edge_banner"
					className="torn_container torn_left torn_right"
				>
					<div></div>
					<div className="banner_text_container">
						<span className="banner_text">
							<h2>Create a New Entry</h2>
							<form onSubmit={formSubmitted} className="entry_form">
								<label for="name">Name of Cryptid:</label>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Name of Cryptid"
									autoComplete="off"
									required
									className="form_input"
								/>
								<label for="location">Location of the Cryptid:</label>
								<input
									type="text"
									name="location"
									id="location"
									placeholder="Country"
									autoComplete="off"
									required
									className="form_input"
									/>
								<label for="mythology">
									The mythology, legend or folklore that this Cryptid belongs
									to:
								</label>
								<input
									type="text"
									name="mythology"
									id="mythology"
									placeholder="Mythology"
									autoComplete="off"
									required
									className="form_input"
									/>
								<label for="characteristics">
									List of characteristics for the Cryptid:
								</label>
								<input
									type="text"
									name="characteristics"
									id="characteristics"
									placeholder="Firebreathing, Aquatic, Tough Skin, Stonegaze etc."
									autoComplete="off"
									required
									className="form_input"
									/>
								<label for="image">An Image URL for the Cryptid:</label>
								<input
									type="text"
									name="image"
									id="image"
									placeholder="Image URL"
									autoComplete="off"
									required
									className="form_input"
									/>
								<label for="content">A full description for the Cryptid:</label>
								<textarea
									type="textarea"
									name="content"
									id="content"
									autoComplete="off"
									placeholder="Enter content here such as descriptions, mythos, folklore,
									legends and any other descriptive that does not fit in previous
									fields"
									required
									className="form_input"
									></textarea>
								<input type="submit" value="Submit" className="submit_btn" />
							</form>
						</span>
					</div>
				</div>
			</section>
		</main>
	);
};

export default EntryForm;
