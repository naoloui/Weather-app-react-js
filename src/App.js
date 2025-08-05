import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Madrid" />

        <footer>
          This project was coded by {""}
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            Naomi Laufer
          </a>
        </footer>
      </div>
    </div>
  );
}
