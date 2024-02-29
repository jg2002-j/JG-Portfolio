import React from 'react'

const NavbarButton = (props) => {
   return (
      <a href={props.link} className="bg-indigo-200 rounded-lg px-11 py-1 mx-5 hover:bg-indigo-400 group transition ease-in-out duration-500 hover:animate-pulse">
         <h1 className="text-lg text-slate-600 group-hover:text-slate-100 font-bold tracking-widest uppercase">{props.name}</h1>
      </a>
   )
}

const NavbarItems = [
   {id: 1, name: "Home", link: "#"},
   {id: 2, name: "Projects", link: "#projects"},
   {id: 3, name: "Contact Me", link: "#contactme"}
]

function Header() {

   return (
	   <>
         <div className="flex justify-center align-middle p-3 m-2 bg-indigo-100 rounded-lg">
            {NavbarItems.map(navItem => (
               <NavbarButton key={navItem.id} name={navItem.name} link={navItem.link} />
            ))}
         </div>
      </>
   )

};	

export default Header;