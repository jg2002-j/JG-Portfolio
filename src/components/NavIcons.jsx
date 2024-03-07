import { Home, CircleUserRound, CodeSquare, FileText, MessageSquareMore } from 'lucide-react';

const NavIcons = (icon, iconcolor) => {
   switch (icon) {
      case "Home":
         return <Home className={`${iconcolor} transition ease-in-out duration-700 origin-center w-5 h-5`} />;
      case "CircleUserRound":
         return <CircleUserRound className={`${iconcolor} transition ease-in-out duration-700 origin-center w-5 h-5`} />;
      case "CodeSquare":
         return <CodeSquare className={`${iconcolor} transition ease-in-out duration-700 origin-center w-5 h-5`} />;
      case "FileText":
         return <FileText className={`${iconcolor} transition ease-in-out duration-700 origin-center w-5 h-5`} />;
      case "MessageSquareMore":
         return <MessageSquareMore className={`${iconcolor} transition ease-in-out duration-700 origin-center w-5 h-5`} />;
      default:
         break;
   }
};

export { NavIcons };