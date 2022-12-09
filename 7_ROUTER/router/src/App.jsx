import "./App.css";

import { Outlet } from "react-router-dom";

// 6 - link entre páginas
import Navbar from "./components/Navbar";

// 14 - search params
import SearchForm from "./components/Search";

function App() {
  return (
    <div className="App">
      {/* 6 - link entre páginas */}
      <Navbar />
      {/* 14 - search params */}
      <SearchForm />
      <h1>React Router</h1>
      <Outlet />
    </div>
  );
}

export default App;
