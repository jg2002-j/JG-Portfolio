import React, { useState } from "react";
import ContactForm from "../components/ContactForm";

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
            <div className="w-full bg-stone-300 bg-opacity-10 rounded-lg p-10 flex flex-col gap-14 max-w-[600px]">
               <h2 className="text-5xl font-title tracking-widest">Get in Touch</h2>
               <div className="flex flex-col gap-2">
                  <h3 className="font-header text-stone-300 text-4xl mb-5">Contact Me</h3>
                  <a href="mailto:jai.2002.gandhi@gmail.com" className="text-stone-400 text-2xl">jai.2002.gandhi@gmail.com</a>
                  <a href="tel:+447481861855" className="text-stone-400 text-2xl">+44 7481 861 855</a>
                  <p className="text-stone-400 text-2xl"></p>
               </div>
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