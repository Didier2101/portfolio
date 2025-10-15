import logo from "../assets/logo-aurora.png";
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
                className=" object-contain transition-transform duration-300 group-hover:scale-110"
            />

        </NavLink>
    );
}
