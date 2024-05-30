import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import IssueRegister from "./pages/IssueRegister";
import Stats from "./pages/Stats";
import MyIssues from "./pages/MyIssues";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Header />
      <div className="flex flex-grow mt-16">
        <Navbar />
        <div className="flex-grow p-4 ml-60">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/issue-register" element={<IssueRegister />} /> 
            <Route path="/stats" element={<Stats />} />
            <Route path="/my-issues" element={<MyIssues />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;