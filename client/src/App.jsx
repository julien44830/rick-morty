import "./App.css";
import Header from "./components/globals/Header";
import Footer from "./components/globals/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
        </>
    );

}

export default App;
