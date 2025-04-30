import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import store from "./redux/store.js";
import { NavigationProvider } from "./context/Navigation";
import App from "./App.jsx";

import "./reset.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <NavigationProvider>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </NavigationProvider>
);
