import React, { useState } from "react";
import { Pointer } from "lucide-react";
import ContactForm from "../components/ContactForm";


//// Must have a contact form for handling events
// TODO: Must include contact information:
   // Email address
   // Link to a PDF version of your CV
   // Link to your GitHub profile
   // Link to your LinkedIn page


function ContactPage() {

   const [ form, setForm ] = useState("contact")
   const switchForms = () => {
      if (form == "contact"){
         setForm("feedback")
      } else {
         setForm("contact")
      }
   }
   const loadForm = () => {
      if (form == "contact"){
         return(<ContactForm/>)
      } else {
         return("")
      }
   }

   const activeFormClasses = "bg-stone-600 bg-opacity-50 text-stone-200"

   return (
      <>
         <div className="min-h-dvh w-vw flex flex-col 2xl:flex-row-reverse justify-center items-center gap-10 p-10 2xl:px-[20vw]">
            <div className="w-full 2xl:max-w-[20vw] bg-stone-300 bg-opacity-10 rounded-lg p-10">
               <h2>Contact Information</h2>
               <p>email</p>
               <p>phone</p>
               <p>city</p>
            </div>
            <div className="w-full lg:flex-grow rounded-lg">
               <button onClick={() => switchForms()} className="flex mb-10 border-2 border-stone-400 border-opacity-70 max-w-fit rounded-lg overflow-hidden">
                  <div className={`px-3 py-1 text-stone-400 hover:bg-stone-500 hover:bg-opacity-50 hover:text-stone-300 ease-in-out duration-500 ${form == "contact" ? activeFormClasses : ""}`}>Contact Me</div>
                  <div className={`px-3 py-1 text-stone-400 hover:bg-stone-500 hover:bg-opacity-50 hover:text-stone-300 ease-in-out duration-500 ${form == "feedback" ? activeFormClasses : ""}`}>Feedback</div>
               </button>
               {loadForm()}
            </div>
         </div>
      </>
   )
};

export default ContactPage;