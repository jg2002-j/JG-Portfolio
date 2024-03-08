import React from "react";
import { Pointer } from "lucide-react";

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
		switch (formData.rating) {
			case "0":
			case "1":
				alert(`Damn, only ${formData.rating}★? Don't worry, ${formData.name}, I'll get my site up to scratch in no time.`);
				break;
			case "2":
			case "3":
				alert(`Thanks for the ${formData.rating}★, ${formData.name}, I'll work on getting it improved ASAP!`);
				break;
			case "4":
			case "5":
				alert(`Woah! ${formData.name}, you really rated my site ${formData.rating}★? Thanks!`);
				break;
			default:
				alert(":P")
				break;
		}
		setFormData({
			name: "",
			email: "",
			rating: "",
			message: "",
		})
	}

  	return (
		<>
			<form className="grid grid-rows-1 grid-cols-5 gap-3 ease-in-out duration-1000">
				<h2 className="font-title text-4xl col-start-1 row-start-1 row-span-1 self-center col-span-5 mx-auto group-hover:hidden bg-gradient-to-r from-slate-300 to-neutral-500 text-transparent bg-clip-text">Get in touch<Pointer size={32} color="#737373 " className="ms-5 inline" /></h2>
				<input 
					className="text-center text-stone-400 px-3 py-5 rounded-lg bg-slate-200 bg-opacity-5 hover:bg-slate-400 hover:bg-opacity-15 ease-in-out duration-1000 col-span-1 row-span-1 row-start-1 col-start-1 opacity-0 group-hover:opacity-100"
					value={formData.name}
					name="name"
					onChange={handleInputChange}
					type="text"
					placeholder="What's your name?"
					id="" 
				/>
				<input 
					className="text-center text-stone-400 px-3 py-5 rounded-lg bg-slate-200 bg-opacity-5 hover:bg-slate-400 hover:bg-opacity-15 ease-in-out duration-1000 col-span-1 row-span-1 row-start-1 col-start-2 opacity-0 group-hover:opacity-100"
					value={formData.email}
					name="email"
					onChange={handleInputChange}
					type="email"
					placeholder="What's your email?"
					id="" 
				/>
				<input 
					className="text-center text-stone-400 px-3 py-5 rounded-lg bg-slate-200 bg-opacity-5 hover:bg-slate-400 hover:bg-opacity-15 ease-in-out duration-1000 col-span-1 row-span-1 row-start-1 col-start-3 opacity-0 group-hover:opacity-100"
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
					className="text-center text-stone-400 px-3 py-5 rounded-lg bg-slate-200 bg-opacity-5 hover:bg-slate-400 hover:bg-opacity-15 ease-in-out duration-1000 col-span-1 row-span-1 row-start-1 col-start-4 opacity-0 group-hover:opacity-100"
					value={formData.message}
					name="message"
					onChange={handleInputChange}
					type="text"
					placeholder="Leave a message for me :)"
					id="" 
				/>
				<button className="text-slate-200 px-3 py-2 rounded-lg bg-slate-200 bg-opacity-5 hover:bg-slate-500 ease-in-out duration-1000 col-span-1 row-span-1 row-start-1 col-start-5 opacity-0 group-hover:opacity-100" type="submit" onClick={handleFormSubmit}>Submit</button>
			</form>
		</>
  	)
}

export default ContactForm;