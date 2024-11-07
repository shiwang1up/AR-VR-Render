import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TryOnApp from "./TryOnApp";
import TryOnApp2D from "./TryOnApp2D";
import ModuleSelection from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ModuleSelection />} />
        <Route path="/2d" element={<TryOnApp2D />} />
        <Route path="/3d" element={<TryOnApp />} />
        {/* Add more routes here as needed */}
      </Routes>
    </div>
  );
}

export default App;
