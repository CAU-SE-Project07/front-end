import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import IssueRegister from "./pages/IssueRegister"; // 새로 추가
import Stats from "./pages/Stats"; // 새로 추가
import MyIssues from "./pages/MyIssues"; // 새로 추가
import Admin from "./pages/Admin"; // 새로 추가

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
            <Route path="/issue-register" element={<IssueRegister />} /> {/* 새로 추가 */}
            <Route path="/stats" element={<Stats />} /> {/* 새로 추가 */}
            <Route path="/my-issues" element={<MyIssues />} /> {/* 새로 추가 */}
            <Route path="/admin" element={<Admin />} /> {/* 새로 추가 */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;