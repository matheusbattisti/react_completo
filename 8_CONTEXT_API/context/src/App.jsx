import "./App.css";
import Navbar from "./components/Navbar";

import { Outlet } from "react-router-dom";

// 3 - estrutura mínima
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Context API</h1>
      <Outlet />
    </div>
  );
}

export default App;
