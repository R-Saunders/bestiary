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
		<React.Fragment>
			<h2>Create a New Entry</h2>
			<form onSubmit={formSubmitted}>
				<label for="name">Name of Cryptid:</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Name of Cryptid"
					autoComplete="off"
					required
				/>
				<label for="location">Location of the Cryptid:</label>
				<input
					type="text"
					name="location"
					id="location"
					placeholder="Country"
					autoComplete="off"
					required
				/>
				<label for="mythology">
					The mythology, legend or folklore that this Cryptid belongs to:
				</label>
				<input
					type="text"
					name="mythology"
					id="mythology"
					placeholder="Mythology"
					autoComplete="off"
					required
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
				/>
				<label for="image">An Image URL for the Cryptid:</label>
				<input
					type="text"
					name="image"
					id="image"
					placeholder="Image URL"
					autoComplete="off"
					required
				/>
				<label for="content">A full description for the Cryptid:</label>
				<textarea
					type="textarea"
					name="content"
					id="content"
					autoComplete="off"
					required
				>
					Enter content here such as descriptions, mythos, folklore, legends and
					any other descriptive that do not fit in previous fields
				</textarea>
				<input type="submit" value="Submit" />
			</form>
		</React.Fragment>
	);
};

export default EntryForm;
