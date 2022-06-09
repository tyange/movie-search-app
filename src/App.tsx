import React from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="App">
      <Header text="HOOKED" />
      <main>
        <Movie />
      </main>
    </div>
  );
}

export default App;
