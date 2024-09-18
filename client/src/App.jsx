import { useContext } from "react";
import Header from "./components/globals/Header";
import Footer from "./components/globals/Footer";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./components/context/ThemeProvider";
import ThemeProvider from "./components/context/ThemeProvider";
import "./App.css";

function App() {
    const theme = useContext(ThemeContext);

    return (
        <div className={`App ${theme}`}>
            <Header theme={theme} />
            <Outlet />
            <Footer theme={theme} />
        </div>
    );
}
export default function AppWrapper() {
    return (
        <ThemeProvider>
            <App />
            {/* <HomePage/> */}
        </ThemeProvider>
    );
}
