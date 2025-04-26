import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Hero from "./pages/Home";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import AccountSettings from "./pages/AccountSettings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
