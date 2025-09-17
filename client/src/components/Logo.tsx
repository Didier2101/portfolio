import logo from "../assets/logo-ibug.png";
import { NavLink } from "react-router-dom";

export default function Logo() {
    return (
        <NavLink
            to="/"
            className="flex items-center gap-2 group"
        >
            <img
                src={logo}
                alt="Logo Ibug"
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl font-extrabold tracking-tight transition-all duration-300 group-hover:tracking-wide mt-1 -ml-2">
                <span className="text-green-500">!</span>
                <span className="text-gray-900 dark:text-gray-200">bug</span>
            </span>
        </NavLink>
    );
}
