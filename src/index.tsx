import React from "react";
import ReactDom from "react-dom/client";
import Home from "./component/Home";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDom.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Home></Home>
    </React.StrictMode>
    );

reportWebVitals();