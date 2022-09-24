import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { store } from "./store";

// Call make Server
makeServer();
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
