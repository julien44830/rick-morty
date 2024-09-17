import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Card({ name, img, id }) {
    return (
        <figure>
            <NavLink to={`/detail/${id}`}>
                <img
                    src={img}
                    alt={name}
                />
                <figcaption>{name}</figcaption>
            </NavLink>
        </figure>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    id: PropTypes.number,
};
