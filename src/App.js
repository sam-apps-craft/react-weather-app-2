import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tadcaster" />
        <footer>
          This project was coded by Sam Raymond and is open-sourced on{" "}
          <a href="" target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://react-weather-app-2-sam.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
