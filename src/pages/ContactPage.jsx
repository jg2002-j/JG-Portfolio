import React from "react";
import ContactMe from "../components/ContactMe";
import ContactForm from "../components/ContactForm";

//// Must have a contact form for handling events
// TODO: Must include contact information:
   // Email address
   // Link to a PDF version of your CV
   // Link to your GitHub profile
   // Link to your LinkedIn page


function ContactPage() {
   return (
	   <div className="2xl:mx-60 m-20" id="contactme">
         <div className="2xl:mx-60 m-20 flex flex-col justify-start items-center" id="contact">
            <h1 className="font-title text-center tracking-[0.7rem] text-6xl bg-gradient-to-r from-red-600 via-indigo-400 to-cyan-700 text-transparent bg-clip-text inline-block">Contact Me</h1>
         </div>
         
      </div>
   )
};

export default ContactPage;