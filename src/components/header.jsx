import React from 'react'

const NavbarButton = (props) => {
   return (
      <a href={props.link} className="bg-indigo-200 rounded-lg px-11 py-1 mx-5 hover:bg-indigo-400 group transition ease-in-out duration-700 hover:animate-pulse flex justify-center align-middle">
         <i className={`me-3 text-lg group-hover:text-slate-100 bi bi-${props.icon}`}></i>
         <h1 className="text-lg text-slate-600 group-hover:text-slate-100 font-bold tracking-widest uppercase">{props.name}</h1>
      </a>
   )
}

const NavbarItems = [
   {id: 1, name: "Home", link: "#", icon: "house"},
   {id: 2, name: "Projects", link: "#projects", icon: "code-square"},
   {id: 3, name: "Contact Me", link: "#contactme", icon: "envelope-open-heart"}
]

function Header() {

   return (
	   <>
         <div className="flex justify-center align-middle p-3 m-2 bg-indigo-100 rounded-lg">
            {NavbarItems.map(navItem => (
               <NavbarButton key={navItem.id} name={navItem.name} link={navItem.link} icon={navItem.icon} />
            ))}
         </div>
      </>
   )

};	

export default Header;