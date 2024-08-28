import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Providers from "./context/Providers.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
