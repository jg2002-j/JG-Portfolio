import { Home, CircleUserRound, CodeSquare, FileText, MessageSquareMore } from 'lucide-react';

const NavIcons = (icon, iconcolor, size) => {
   switch (icon) {
      case "Home":
         return <Home size={size} className={`${iconcolor} transition ease-in-out duration-700 origin-center`} />;
      case "CircleUserRound":
         return <CircleUserRound size={size} className={`${iconcolor} transition ease-in-out duration-700 origin-center`} />;
      case "CodeSquare":
         return <CodeSquare size={size} className={`${iconcolor} transition ease-in-out duration-700 origin-center`} />;
      case "FileText":
         return <FileText size={size} className={`${iconcolor} transition ease-in-out duration-700 origin-center`} />;
      case "MessageSquareMore":
         return <MessageSquareMore size={size} className={`${iconcolor} transition ease-in-out duration-700 origin-center`} />;
      default:
         break;
   }
};

export { NavIcons };