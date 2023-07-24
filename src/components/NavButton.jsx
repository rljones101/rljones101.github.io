import { HashLink } from "react-router-hash-link";

export default function NavButton({ to, children }) {
  return (
    <div className="relative group">
      <HashLink
        smooth
        to={to}
        className="flex text-black transition ease-out hover:ease-in duration-300 pt-2 pb-2 font-bold uppercase">
        {children}
      </HashLink>
      <span className="absolute -bottom-1 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
    </div>
  );
}
