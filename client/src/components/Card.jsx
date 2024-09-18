import { useContext } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { ThemeContext } from "./context/ThemeProvider";

export default function Card({ name, img, id }) {
    const theme = useContext(ThemeContext);

    return (
        <figure className={`card-${theme.theme}`}>
            <NavLink to={`/detail/${id}`}>
                <img
                    src={img}
                    alt={name}
                />
                <figcaption className={`text-card-${theme.theme}`}>
                    {name}
                </figcaption>
            </NavLink>
        </figure>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    id: PropTypes.number,
};
