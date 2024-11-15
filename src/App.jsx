import { useState } from "react";
import ReactSVG from './assets/react.svg';
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavItems from "./components/NavItems";
// import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    {/* <TopBar /> */}
      <NavItems />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
