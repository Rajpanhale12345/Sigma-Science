import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
<<<<<<< HEAD
import App from "./App";
=======
import { HelmetProvider } from "react-helmet-async";
import App from "../App";
>>>>>>> c0b759a1c50cad137a69cc32a2f9b294c5430567
import store from "../store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
