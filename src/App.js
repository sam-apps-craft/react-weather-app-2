import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">

        <Weather />
        <footer>
          This project was coded by Sam Raymond and is open-sourced on{" "}
          <a
            href="https://github.com/sam-apps-craft/react-weather-app-2"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
