import React, { useState, useRef } from "react";
import { Ban, MailCheck } from "lucide-react";
import emailjs from "@emailjs/browser";

function FeedbackForm() {

	const [ feedbackformData, setfeedbackFormData ] = useState({
		name: "",
		email: "",
		rating: "",
		improvement: "",
		favourite: ""
	})

	const [ selectedRadio, setselectedRadio ] = useState("");

	const handleFeedbackInputChange = (e) => {
		const { name, value, id } = e.target;
		console.log(name, value, e.target)
		if (name == "rating"){
			setselectedRadio(id)
			console.log(selectedRadio)
		}
		setfeedbackFormData({
			...feedbackformData,
			[name]: value,
		})
	}

	let feedbackIncompleteFields = []
	const [ feedbackfields, setfeedbackfields ] = useState(feedbackIncompleteFields)
	
	const feedbackForm = useRef()

	const handleFeedbackFormSubmit = (e) => {
		e.preventDefault();
		feedbackIncompleteFields = []
		if (!feedbackformData.email || !feedbackformData.rating || !feedbackformData.name) {
			document.getElementById("incompleteFeedbackForm").showModal()
			for (const key of Object.keys(feedbackformData)) {
				if (key != "improvement" && key != "favourite") {
					if (!feedbackformData[key]) {feedbackIncompleteFields.push(key)}
				}
			}
			setfeedbackfields(feedbackIncompleteFields)
		} else {			
			emailjs.sendForm(
				"service_i1u1bok",
				"feedback_form",
				feedbackForm.current, 
				{publicKey: "qJeXSY6H4bUGT4v3R"}
			).then(
				() => {
					document.getElementById("feedbackMessageSuccess").showModal();
					setfeedbackFormData({name: "", email: "", rating: "", improvement: "", favourite: ""})
					setselectedRadio("")
				},
				(error) => {
					document.getElementById("feedbackMessageFailure").showModal();
					console.log("Error: " + error.text)
				},
			);
		}
	}

	return (
		<>
			<form ref={feedbackForm} className="flex flex-col gap-14 max-w-[700px]">
				<div className="flex flex-col gap-5">
					<label className="font-header text-pretty text-stone-300 text-4xl">What's your name?<span className="text-stone-600 inline ms-2">*</span></label>
					<input className="text-stone-400 text-2xl px-5 py-4 rounded-lg bg-stone-300 bg-opacity-10 focus:bg-stone-200 focus:bg-opacity-15" value={feedbackformData.name} name="name" onChange={handleFeedbackInputChange} type="text" placeholder="Darth Vader" />
				</div>
				<div className="flex flex-col gap-5">
					<label className="font-header text-pretty text-stone-300 text-4xl">What's your email?<span className="text-stone-600 inline ms-2">*</span></label>
					<input className="text-stone-400 text-2xl px-5 py-4 rounded-lg bg-stone-300 bg-opacity-10 focus:bg-stone-200 focus:bg-opacity-15" value={feedbackformData.email} name="email" onChange={handleFeedbackInputChange} type="email" placeholder="darth_vader@gmail.com" />
				</div>
				<div className="flex flex-col gap-5">
					<label className="font-header text-pretty text-stone-300 text-4xl">What would you rate this site?<span className="text-stone-600 inline ms-2">*</span></label>
					<div className="flex flex-wrap items-center justify-start gap-5 text-2xl">
						<label className="cursor-pointer px-5 py-2 rounded-lg bg-stone-300 bg-opacity-10 has-[:checked]:bg-stone-200 has-[:checked]:bg-opacity-30 has-[:checked]:text-stone-400 hover/focus:text-stone-400 hover/focus:bg-stone-200 hover/focus:bg-opacity-15 duration-500 ease-in-out">
							<input onChange={handleFeedbackInputChange} checked={selectedRadio == "1star"} className="appearance-none" type="radio" id="1star" name="rating" value="1" />
							<span className="" htmlFor="1star">★</span>
						</label>
						<label className="cursor-pointer px-5 py-2 rounded-lg bg-stone-300 bg-opacity-10 has-[:checked]:bg-stone-200 has-[:checked]:bg-opacity-30 has-[:checked]:text-stone-400 hover/focus:text-stone-400 hover/focus:bg-stone-200 hover/focus:bg-opacity-15 duration-500 ease-in-out">
							<input onChange={handleFeedbackInputChange} checked={selectedRadio == "2star"} className="appearance-none" type="radio" id="2star" name="rating" value="2" />
							<span className="" htmlFor="2star">★★</span>
						</label>
						<label className="cursor-pointer px-5 py-2 rounded-lg bg-stone-300 bg-opacity-10 has-[:checked]:bg-stone-200 has-[:checked]:bg-opacity-30 has-[:checked]:text-stone-400 hover/focus:text-stone-400 hover/focus:bg-stone-200 hover/focus:bg-opacity-15 duration-500 ease-in-out">
							<input onChange={handleFeedbackInputChange} checked={selectedRadio == "3star"} className="appearance-none" type="radio" id="3star" name="rating" value="3" />
							<span className="" htmlFor="3star">★★★</span>
						</label>
						<label className="cursor-pointer px-5 py-2 rounded-lg bg-stone-300 bg-opacity-10 has-[:checked]:bg-stone-200 has-[:checked]:bg-opacity-30 has-[:checked]:text-stone-400 hover/focus:text-stone-400 hover/focus:bg-stone-200 hover/focus:bg-opacity-15 duration-500 ease-in-out">
							<input onChange={handleFeedbackInputChange} checked={selectedRadio == "4star"} className="appearance-none" type="radio" id="4star" name="rating" value="4" />
							<span className="" htmlFor="4star">★★★★</span>
						</label>
						<label className="cursor-pointer px-5 py-2 rounded-lg bg-stone-300 bg-opacity-10 has-[:checked]:bg-stone-200 has-[:checked]:bg-opacity-30 has-[:checked]:text-stone-400 hover/focus:text-stone-400 hover/focus:bg-stone-200 hover/focus:bg-opacity-15 duration-500 ease-in-out">
							<input onChange={handleFeedbackInputChange} checked={selectedRadio == "5star"} className="appearance-none" type="radio" id="5star" name="rating" value="5" />
							<span className="" htmlFor="5star">★★★★★</span>
						</label>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<label className="font-header text-pretty text-stone-300 text-4xl">How can I improve?</label>
					<textarea className="text-stone-400 text-2xl px-5 py-4 rounded-lg bg-stone-300 bg-opacity-10 focus:bg-stone-200 focus:bg-opacity-15" value={feedbackformData.improvement} name="improvement" onChange={handleFeedbackInputChange} type="text" placeholder="Include at least 1 picture of Emperor Palpatine with his favourite Hello Kitty purse." rows="3" />
				</div>
				<div className="flex flex-col gap-5">
					<label className="font-header text-pretty text-stone-300 text-4xl">What did you like the best?</label>
					<textarea className="text-stone-400 text-2xl px-5 py-4 rounded-lg bg-stone-300 bg-opacity-10 focus:bg-stone-200 focus:bg-opacity-15" value={feedbackformData.favourite} name="favourite" onChange={handleFeedbackInputChange} type="text" placeholder="All the Easter eggs...?" rows="3" />
				</div>
				<button className="text-slate-200 px-10 py-3 max-w-fit rounded-lg bg-slate-200 bg-opacity-15 text-start text-xl duration-300 hover:bg-opacity-40" type="submit" onClick={(e) => handleFeedbackFormSubmit(e)}>Submit</button>
			</form>

			<dialog id="incompleteFeedbackForm" className="modal">
				<div className="modal-box hidescroll p-10 bg-opacity-90 noise rounded-lg shadow-none flex flex-col justify-center items-start gap-4">
					<h3 className="font-header text-stone-300 text-4xl flex items-center"><Ban size={30} className="inline me-3 text-red-900 text-opacity-80"/>Error</h3>
					<p className="text-lg">Please fill out the following fields:</p>
					<ul className="list-disc list-inside">
						{feedbackfields.map((field) => (
							<li key={field} className="capitalize">{field}</li>
						))}
					</ul>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>

			<dialog id="feedbackMessageSuccess" className="modal">
				<div className="modal-box hidescroll p-10 bg-opacity-90 noise rounded-lg shadow-none flex flex-col justify-center items-start gap-4">
					<h3 className="font-header text-stone-300 text-4xl flex items-center"><MailCheck size={30} className="inline me-3 text-emerald-700 text-opacity-80"/>Success</h3>
					<p className="text-lg">Your message has been sent successfully! Thank you for getting in touch, I'll reply as soon as possible. :)</p>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>

			<dialog id="feedbackMessageFailure" className="modal">
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

export default FeedbackForm;