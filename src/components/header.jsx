import React from 'react';
import { Home, CircleUserRound, CodeSquare, FileText, MessageSquareMore } from 'lucide-react';

const NavIcon = (props) => {
   switch (props.icon) {
      case "Home":
         return <Home color="#E0E2DB" className="transition ease-in-out duration-700 origin-center w-5 h-5" />;
      case "CircleUserRound":
         return <CircleUserRound color="#E0E2DB" className="transition ease-in-out duration-700 origin-center w-5 h-5" />;
      case "CodeSquare":
         return <CodeSquare color="#E0E2DB" className="transition ease-in-out duration-700 origin-center w-5 h-5" />;
      case "FileText":
         return <FileText color="#E0E2DB" className="transition ease-in-out duration-700 origin-center w-5 h-5" />;
      case "MessageSquareMore":
         return <MessageSquareMore color="#E0E2DB" className="transition ease-in-out duration-700 origin-center w-5 h-5" />;
      default:
         break;
   }
}

const NavbarButton = (props) => {
   return (
      <a href={props.link} className="rounded-lg px-4 py-2 mx-5 my-10 group transition ease-in-out duration-700 hover:scale-150 hover:bg-neutral-700 flex justify-center align-middle">
         {NavIcon(props)}
      </a>
   )
}

const NavbarItems = [
   {id: 1, name: "Home", link: "#", icon: "Home"},
   {id: 2, name: "About Me", link: "#aboutme", icon: "CircleUserRound"},
   {id: 3, name: "Projects", link: "#projects", icon: "CodeSquare"},
   {id: 4, name: "Experience", link: "#experience", icon: "FileText"},
   {id: 5, name: "Contact Me", link: "#contactme", icon: "MessageSquareMore"}
]


function Header() {
   return (
	   <>
         <div className="flex justify-evenly align-middle px-3">
            <div className="hidden lg:block border-r-2 border-gray-400 w-full"></div>
            <div className="hidden lg:block border-r-2 border-gray-400 w-full"></div>
            <div className='flex justify-centre align-middle px-3'>
               {NavbarItems.map(navItem => (
                  <NavbarButton key={navItem.id} name={navItem.name} link={navItem.link} icon={navItem.icon} />
               ))}
            </div>
            <div className="hidden lg:block border-l-2 border-gray-400 w-full"></div>
         </div>
      </>
   )
};	

export default Header;