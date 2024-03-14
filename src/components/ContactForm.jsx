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
		if (!formData.email || !formData.message || !formData.name) {
			alert("Hey, I need a little more info please - make sure the name, email and message forms are filled! Thanks ♥")
		} else {			
			document.getElementById("modalbody").textContent = `Hi Jai, I'm reaching out to you from your website! ${formData.message}. Get back to me on ${formData.email} Thanks, ${formData.name}.`
			document.getElementById("formresponse").showModal()
			setFormData({
				name: "",
				email: "",
				rating: "",
				message: "",
			})
		}
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
			<dialog id="formresponse" className="modal">
				<div className="modal-box">
					<div className="flex flex-col justify-start items-start my-[6rem] mx-11">
						<h1 className="font-title text-3xl tracking-[5px] uppercase inline-block bg-gradient-to-r from-red-600 via-indigo-400 to-cyan-700 text-transparent bg-clip-text select-none">CONTACT ME</h1>
						<h3 className="my-3 font-header text-lg select-none">Just copy the text below and send it to any of these:</h3>
						<a className="rounded border-2 px-3 py-1 my-1 text-sm" href="mailto:jai.2002.gandhi@gmail.com" target="_blank">My Email</a>
						<a className="rounded border-2 px-3 py-1 my-1 text-sm" href="https://www.linkedin.com/in/jg2002/" target="_blank">My LinkedIn</a>
						<p className="my-5 select-all text-stone-400" id="modalbody"></p>
					</div>
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
  	)
}

export default ContactForm;