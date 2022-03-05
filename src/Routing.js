import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./Components/LoginComponet/HomeComponent/Home";
import Login from "./Components/LogoutComponent/Login";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/login" />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />}  />    
      </Routes>
    </Router>
  );
}
