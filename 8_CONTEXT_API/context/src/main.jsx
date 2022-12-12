import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 2 - criando o provider
import { CounterContextProvider } from "./context/CounterContext";

// 3 - criando uma estrutura
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contact from "./routes/Contact";
import Home from "./routes/Home";

// 5 - contexto mais complexo
import { TitleColorContextProvider } from "./context/TitleColorContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TitleColorContextProvider>
      <CounterContextProvider>
        <RouterProvider router={router} />
      </CounterContextProvider>
    </TitleColorContextProvider>
  </React.StrictMode>
);
