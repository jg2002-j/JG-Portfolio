import React from "react";
import { Pointer } from "lucide-react";


//// Must have a contact form for handling events
// TODO: Must include contact information:
   // Email address
   // Link to a PDF version of your CV
   // Link to your GitHub profile
   // Link to your LinkedIn page


function ContactPage() {


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
			alert("Hey, I need a little more info please - make sure the name, email and message forms are filled! Thanks")
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
	   <div className="2xl:mx-60 min-h-dvh " id="contactme">
         <div className="2xl:mx-60 m-20 flex flex-col justify-start items-center gap-10" id="contact">
            <h1 className="font-title text-center tracking-[0.7rem] text-6xl bg-gradient-to-r from-red-600 via-indigo-400 to-cyan-700 text-transparent bg-clip-text inline-block">Contact Me</h1>
         </div>
         <div className="flex flex-wrap gap-8 items-center justify-between">
            <h2 className="font-title text-8xl tracking-wider">Get in touch!</h2>
            <button onClick={""} className="font-title text-3xl rounded px-5 py-3 border-2 tracking-wide">Contact Me</button>
         </div> 
         <div>
            <form className="flex flex-col gap-10 max-w-[700px]">
               <input className="text-center text-stone-400 px-3 py-5 rounded-lg bg-stone-600 bg-opacity-15 text-3xl" value={formData.name} name="name" onChange={handleInputChange} type="text" placeholder="What's your name?"/>
               <input className="text-center text-stone-400 px-3 py-5 rounded-lg bg-stone-600 bg-opacity-15 text-3xl" value={formData.email} name="email" onChange={handleInputChange} type="email" placeholder="What's your email?"/>
               <input className="text-center text-stone-400 px-3 py-5 rounded-lg bg-stone-600 bg-opacity-15 text-3xl" value={formData.rating} name="rating" onChange={handleInputChange} type="number" placeholder="Rate my site out of 5?" min={0} max={5}/>
               <input className="text-center text-stone-400 px-3 py-5 rounded-lg bg-stone-600 bg-opacity-15 text-3xl" value={formData.message} name="message" onChange={handleInputChange} type="text" placeholder="Leave a message for me :)"/>
               <button className="text-slate-200 px-3 py-5 rounded-lg bg-slate-200 bg-opacity-15 text-3xl duration-300 hover:bg-opacity-40" type="submit" onClick={() => handleFormSubmit()}>Submit</button>
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
         </div>
      </div>
   )
};

export default ContactPage;