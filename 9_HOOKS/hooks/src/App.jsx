import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { SomeContext } from "./components/HookUseContext";
import "./App.css";

function App() {
  const { contextValue } = useContext(SomeContext);

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
