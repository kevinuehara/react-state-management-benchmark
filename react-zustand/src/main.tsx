import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ButtonChangeTheme } from "./components/ButtonChangeTheme/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ButtonChangeTheme label="Trocar tema" />
    <App />
  </React.StrictMode>
);
