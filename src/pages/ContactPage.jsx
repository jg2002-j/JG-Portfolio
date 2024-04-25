import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import FeedbackForm from "../components/FeedbackForm";
import { Bug, Send, MessagesSquare, MapPin } from "lucide-react";
import BackgroundTexture from "../assets/bgTextures/BackgroundTexture";

function ContactPage() {

   // States
   const [ form, setForm ] = useState("contact")

   // Constants
   const activeFormClasses = "bg-stone-600 bg-opacity-50 text-stone-200"

   // Functions
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
         return(<FeedbackForm/>)
      }
   }

   const loadBugReport = () => {
      if (form == "feedback"){
         return(
            <div className="w-full bg-stone-300 bg-opacity-10 rounded-lg p-10 flex flex-col gap-2">
            <h3 className="font-header text-stone-300 text-xl lg:text-4xl mb-2 lg:mb-5">Found a Bug?</h3>
               <a target="_blank" href="https://github.com/jg2002-j/react-portfolio/issues/new" className="max-w-fit text-stone-400 text-sm lg:text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-1 lg:py-2 flex items-center">
                  <Bug className="inline h-4 lg:h-5 me-2 lg:me-5"/>
                  Report it here!
               </a>
               <p className="max-w-fit text-stone-400 text-xs lg:text-lg py-2 flex items-center">Or include it in the Feedback form.</p>
            </div> 
         )
      }
   }

   return (
      <>
         <Navbar/>
         <div className="min-h-dvh w-vw flex flex-col 2xl:flex-row-reverse justify-center items-center gap-10 pt-24 p-10 2xl:px-[20vw] relative bg-stone-900 bg-opacity-75 noise text-stone-400">
            <BackgroundTexture />
            <div className="flex flex-col max-w-[600px] w-full gap-10">
               <div className="w-full bg-stone-300 bg-opacity-10 rounded-lg p-10 flex flex-col gap-14">
                  <h2 className="text-3xl lg:text-5xl font-title tracking-widest">Get in Touch</h2>
                  <div className="flex flex-col gap-2">
                     <h3 className="font-header text-stone-300 text-xl lg:text-4xl mb-2 lg:mb-5">Contact Me</h3>
                     <a target="_blank" href="mailto:jai.2002.gandhi@gmail.com" className="max-w-fit text-stone-400 text-sm lg:text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-1 lg:py-2 flex items-center">
                        <Send className="inline h-4 lg:h-5 me-2 lg:me-5"/>
                        jai.2002.gandhi@gmail.com
                     </a>
                     <a target="_blank" href="https://wa.me/447481861855" className="max-w-fit text-stone-400 text-sm lg:text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-1 lg:py-2 flex items-center">
                        <MessagesSquare className="inline h-4 lg:h-5 me-2 lg:me-5"/>
                        +44 7481 861 855
                     </a>
                     <p className="max-w-fit text-stone-400 text-sm lg:text-2xl py-1 lg:py-2 flex items-center"><MapPin className="inline h-4 lg:h-5 me-2 lg:me-5" />London, United Kingdom</p>
                  </div>
                  <div className="flex flex-col gap-2">
                     <h3 className="font-header text-stone-300 text-xl lg:text-4xl mb-2 lg:mb-5">Links</h3>
                     <a target="_blank" href="https://github.com/jg2002-j" className="max-w-fit text-stone-400 text-sm lg:text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-1 lg:py-2 flex items-center ">
                        <img className="aspect-square h-3 me-3 lg:h-5 lg:me-4" src="https://cdn.simpleicons.org/github/a7a29f" alt="GitHub"/>
                        <span>GitHub</span>
                     </a>
                     <a target="_blank" href="https://www.linkedin.com/in/jg2002/" className="max-w-fit text-stone-400 text-sm lg:text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-1 lg:py-2 flex items-center ">
                        <img className="aspect-square h-3 me-3 lg:h-5 lg:me-4" src="https://cdn.simpleicons.org/linkedin/a7a29f" alt="LinkedIn"/>
                        <span>LinkedIn</span>
                     </a>
                     <a target="_blank" href="https://www.dropbox.com/scl/fi/2y6z2e05ia477za2cebtz/JaiGandhiCV.pdf?rlkey=ssr2bkcj5l1xts5wliez85kol&dl=0" className="max-w-fit text-stone-400 text-sm lg:text-2xl ease-in-out duration-500 hover:bg-stone-300 hover:bg-opacity-10 hover:rounded-lg hover:px-5 py-1 lg:py-2 flex items-center ">
                        <img className="aspect-square h-3 me-3 lg:h-5 lg:me-4" src="https://cdn.simpleicons.org/googledocs/a7a29f" alt="My CV"/>
                        <span>My CV</span>
                     </a>
                  </div>
               </div>
               {loadBugReport()}
            </div>
            <div className="w-full lg:flex-grow rounded-lg">
               <button onClick={() => switchForms()} className="flex mb-10 border-2 border-stone-400 border-opacity-70 max-w-fit rounded-lg overflow-hidden mx-auto">
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