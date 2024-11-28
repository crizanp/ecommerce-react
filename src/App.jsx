import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavItems />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
