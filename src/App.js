import React from 'react';
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import IssueRegister from './pages/IssueRegister';
import Admin from './pages/Admin';
import './App.css';


function App() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Header />
      <div className="flex flex-grow mt-16">
        <Navbar />
        <div className="flex-grow p-4 ml-60">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/issue-register" element={<IssueRegister />} /> 
            <Route path="/admin" element={<Admin />} /> 
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;