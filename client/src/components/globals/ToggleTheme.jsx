import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export default function ToggleTheme() {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleChange = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <label className="toggle">
            <input
                className="toggle-checkbox"
                type="checkbox"
                onChange={handleChange}
                checked={theme === "dark"}
            />
            <div className="toggle-switch" />
        </label>
    );
}
