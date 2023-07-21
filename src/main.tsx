import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="h-screen w-screen bg-slate-100 text-slate-800 flex justify-center items-center font-custom">
      <App />
    </div>
  </React.StrictMode>
);
