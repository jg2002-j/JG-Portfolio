import { Home, CircleUserRound, CodeSquare, FileText, MessageSquareMore } from 'lucide-react';

const NavIcons = (props) => {
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

const NavItems = [
   {id: 1, name: "Home", link: "#home", icon: "Home"},
   {id: 2, name: "About Me", link: "#aboutme", icon: "CircleUserRound"},
   {id: 3, name: "Projects", link: "#projects", icon: "CodeSquare"},
   {id: 4, name: "Experience", link: "#experience", icon: "FileText"},
   {id: 5, name: "Contact Me", link: "#contactme", icon: "MessageSquareMore"}
]

export { NavIcons, NavItems };