import React from 'react';
import { NavIcons, NavItems } from "./NavData";


const HeaderNavButton = (props) => {
   return (
      <a href={props.link} className="rounded-lg px-4 py-2 mx-5 my-10 group ease-in-out duration-700 hover:scale-150 hover:bg-neutral-700 flex justify-center items-center">
         {NavIcons(props)}
      </a>
   )
}

function Header() {
   return (
	   <>
         <nav className="flex justify-evenly align-middle px-3">
            <div className="hidden 2xl:block border-r-2 border-gray-400 w-full"></div>
            <div className="hidden 2xl:block border-r-2 border-gray-400 w-full"></div>
            <div className='flex justify-centre align-middle px-3'>
               {NavItems.map(navItem => (
                  <HeaderNavButton key={navItem.id} name={navItem.name} link={navItem.link} icon={navItem.icon} />
               ))}
            </div>
            <div className="hidden 2xl:block border-l-2 border-gray-400 w-full"></div>
         </nav>
      </>
   )
};	

export default Header;