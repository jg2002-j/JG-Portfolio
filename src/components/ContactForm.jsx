import React, { useState, useRef } from "react";
import { Ban, MailCheck } from "lucide-react";
import emailjs from "@emailjs/browser";

function ContactForm() {

	const [ formData, setFormData ] = useState({
		name: "",
		email: "",
		message: "",
	})

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		})
	}

	let incompleteFormFields = []
	const [ ffields, setFfields ] = useState(incompleteFormFields)
	
	const form = useRef()

	const handleFormSubmit = (e) => {
		e.preventDefault();
		incompleteFormFields = []
		if (!formData.email || !formData.message || !formData.name) {
			document.getElementById("incompleteform").showModal()
			for (const key of Object.keys(formData)) {
				if (!(formData[key])) {incompleteFormFields.push(key)}
			}
			setFfields(incompleteFormFields)
		} else {			
			emailjs.sendForm(
				"service_i1u1bok",
				"contact_form",
				form.current, 
				{publicKey: "qJeXSY6H4bUGT4v3R"}
			).then(
				() => {
					document.getElementById("messagesuccess").showModal();
					setFormData({name: "", email: "", message: "",})
				},
				(error) => {
					document.getElementById("messagefailure").showModal();
					console.log("Error: " + error.text)
				},
			);
		}
	}

	return (
		<>
			<form ref={form} className="flex flex-col gap-14 max-w-[700px] mx-auto">
				<div className="flex flex-col gap-5">
					<label className="font-header text-stone-300 text-4xl">What's your name?<span className="text-stone-600 inline ms-2">*</span></label>
					<input className="text-stone-400 text-2xl px-5 py-4 rounded-lg bg-stone-300 bg-opacity-10 focus:bg-stone-200 focus:bg-opacity-15" value={formData.name} name="name" onChange={handleInputChange} type="text" placeholder="Luke Skywalker" />
				</div>
				<div className="flex flex-col gap-5">
					<label className="font-header text-stone-300 text-4xl">What's your email?<span className="text-stone-600 inline ms-2">*</span></label>
					<input className="text-stone-400 text-2xl px-5 py-4 rounded-lg bg-stone-300 bg-opacity-10 focus:bg-stone-200 focus:bg-opacity-15" value={formData.email} name="email" onChange={handleInputChange} type="email" placeholder="l.skywalker@gmail.com" />
				</div>
				<div className="flex flex-col gap-5">
					<label className="font-header text-stone-300 text-4xl">How can I help?<span className="text-stone-600 inline ms-2">*</span></label>
					<textarea className="text-stone-400 text-2xl px-5 py-4 rounded-lg bg-stone-300 bg-opacity-10 focus:bg-stone-200 focus:bg-opacity-15" value={formData.message} name="message" onChange={handleInputChange} type="text" placeholder="Please draw me a picture of baby Yoda with a cowboy hat." rows="3" />
				</div>
				<button className="text-slate-200 px-10 py-3 max-w-fit rounded-lg bg-slate-200 bg-opacity-15 text-start text-xl duration-300 hover:bg-opacity-40" type="submit" onClick={(e) => handleFormSubmit(e)}>Submit</button>
			</form>

			<dialog id="incompleteform" className="modal">
				<div className="modal-box hidescroll p-10 bg-opacity-90 noise rounded-lg shadow-none flex flex-col justify-center items-start gap-4">
					<h3 className="font-header text-stone-300 text-4xl flex items-center"><Ban size={30} className="inline me-3 text-red-900 text-opacity-80"/>Error</h3>
					<p className="text-lg">Please fill out the following fields:</p>
					<ul className="list-disc list-inside">
						{ffields.map((field) => (
							<li key={field} className="capitalize">{field}</li>
						))}
					</ul>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>

			<dialog id="messagesuccess" className="modal">
				<div className="modal-box hidescroll p-10 bg-opacity-90 noise rounded-lg shadow-none flex flex-col justify-center items-start gap-4">
					<h3 className="font-header text-stone-300 text-4xl flex items-center"><MailCheck size={30} className="inline me-3 text-emerald-700 text-opacity-80"/>Success</h3>
					<p className="text-lg">Your message has been sent successfully! Thank you for getting in touch, I'll reply as soon as possible. :)</p>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>

			<dialog id="messagefailure" className="modal">
				<div className="modal-box hidescroll p-10 bg-opacity-90 noise rounded-lg shadow-none flex flex-col justify-center items-start gap-4">
					<h3 className="font-header text-stone-300 text-4xl flex items-center"><Ban size={30} className="inline me-3 text-red-900 text-opacity-80"/>Error</h3>
					<p className="mt-5 text-lg">Please try again later, or alternatively use another contact method.</p>
					<p className="text-lg">Thank you!</p>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	)
};

export default ContactForm;