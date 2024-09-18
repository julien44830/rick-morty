import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import ToggleTheme from "./ToggleTheme";

export default function Header({ theme }) {
    return (
        <header>
            <img
                src="rick_logo.png"
                alt="logo Rick & Morty"
            />
            <nav className={`text-${theme.theme}`}>
                <NavLink
                    className="link-header"
                    to="/"
                >
                    Accueil
                </NavLink>
                <NavLink
                    className="link-header"
                    to="/Login"
                >
                    Connexion
                </NavLink>
                <ToggleTheme />
            </nav>
        </header>
    );
}

Header.propTypes = {
    theme: PropTypes.object,
};
