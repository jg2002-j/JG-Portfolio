import React, { useState, useRef } from "react";
import Title from "../components/Title";
import FeaturedProject from "../components/FeaturedProject";
import CurrentTime from "../components/CurrentTime";
import SmSocialLinks from "../components/SmSocialLinks";
import WhatIDo from "../components/WhatIDo";
import GetInTouch from "../components/GetInTouch";

function HomePage() {
   return (
      <>
         <div className="scrollPanel min-h-dvh w-vw flex flex-col justify-between bgimage">
            <div className="flex justify-center lg:justify-between p-2">
               <SmSocialLinks/>
               <div className="hidden lg:flex justify-end gap-x-2">
                  <span className="tracking-wider select-none text-stone-400 bg-stone-300 bg-opacity-10 hover:bg-stone-900 hover:text-stone-300 hover:bg-opacity-95  duration-500 ease-in-out rounded-lg text-xs font-mono px-4 py-3"><CurrentTime/></span>
                  <span className="tracking-wider select-none text-stone-400 bg-stone-300 bg-opacity-10 hover:bg-stone-900 hover:text-stone-300 hover:bg-opacity-95  duration-500 ease-in-out rounded-lg text-xs font-mono px-4 py-3">London, United Kingdom</span>
               </div>
            </div>
            <Title/>
         </div>
         <WhatIDo/>   
         <FeaturedProject/>
         <GetInTouch/>
         <div className="w-full bg-stone-900 noise p-5 text-center">
            <p className="text-xs">Landing page art by <a className="font-bold hover:text-stone-200 duration-300" href="https://www.artstation.com/artwork/WB1JeE" target="_blank">@Xebelion</a> on Artstation</p>
            <p className="text-xs">Background art by <a className="font-bold hover:text-stone-200 duration-300" href="https://unsplash.com/@pawel_czerwinski?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Pawel Czerwinski</a> on Unsplash</p>
         </div>
      </>
   )
};

export default HomePage;


