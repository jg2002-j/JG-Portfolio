import { Home, CircleUserRound, CodeSquare, FileText, MessageSquareMore } from 'lucide-react';

const NavIcons = (icon, iconcolor) => {
   switch (icon) {
      case "Home":
         return <Home size={15} className={`${iconcolor} transition ease-in-out duration-700 origin-center`} />;
      case "CircleUserRound":
         return <CircleUserRound size={15} className={`${iconcolor} transition ease-in-out duration-700 origin-center`} />;
      case "CodeSquare":
         return <CodeSquare size={15} className={`${iconcolor} transition ease-in-out duration-700 origin-center`} />;
      case "FileText":
         return <FileText size={15} className={`${iconcolor} transition ease-in-out duration-700 origin-center`} />;
      case "MessageSquareMore":
         return <MessageSquareMore size={15} className={`${iconcolor} transition ease-in-out duration-700 origin-center`} />;
      default:
         break;
   }
};

export { NavIcons };