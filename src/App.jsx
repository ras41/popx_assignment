import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Hero from "./pages/Home";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
