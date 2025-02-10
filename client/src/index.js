import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../src/index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    {/* <Routes>
      <Route path="/" element={<App />} />
      <Route path="/favorites" element={<App />} />
    </Routes> */}
  </BrowserRouter>
);
