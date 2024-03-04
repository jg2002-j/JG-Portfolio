import React from "react";

function ContactForm() {

	const [ formData, setFormData ] = React.useState({
		name: "",
		email: "",
		rating: "",
		message: "",
	})

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleFormSubmit = (e) => {
		e.preventDefault();
		alert(formData);
		setFormData({
			name: "",
			email: "",
			rating: "",
			message: "",
		})
	}

  	return (
		<>
			<form className="flex flex-col gap-3 justify-center items-start m-5">
				<input 
					className="px-3 py-1 rounded-lg"
					value={formData.name}
					name="name"
					onChange={handleInputChange}
					type="text"
					placeholder="What's your name?"
					id="" 
				/>
				<input 
					className="px-3 py-1 rounded-lg"
					value={formData.email}
					name="email"
					onChange={handleInputChange}
					type="text"
					placeholder="What's your email?"
					id="" 
				/>
				<input 
					className="px-3 py-1 rounded-lg"
					value={formData.rating}
					name="rating"
					onChange={handleInputChange}
					type="number"
					placeholder="Rate my site out of 5?"
					min={0}
					max={5}
					id="" 
				/>
				<input 
					className="px-3 py-1 rounded-lg"
					value={formData.message}
					name="message"
					onChange={handleInputChange}
					type="text"
					placeholder="Leave a message for me :)"
					id="" 
				/>
				<button className="text-slate-200 border-2 px-3 py-1 rounded-lg" type="submit" onClick={handleFormSubmit}>Submit</button>
			</form>
		</>
  	)
}

export default ContactForm;