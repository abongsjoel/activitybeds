import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NavigationProvider } from "./context/Navigation";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <NavigationProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </NavigationProvider>
);
