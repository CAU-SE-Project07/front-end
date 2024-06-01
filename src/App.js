import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import IssueRegister from "./pages/IssueRegister";
import MyIssues from "./pages/MyIssues";
import Admin from "./pages/Admin";
import IssueDetails from "./pages/IssueDetails";

function App() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <div className="flex flex-grow mt-16">
              <Navbar />
              <div className="flex-grow ml-60">
                <Home />
              </div>
            </div>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/issue-register" element={
          <>
            <Header />
            <div className="flex flex-grow mt-16">
              <Navbar />
              <div className="flex-grow p-4 ml-60">
                <IssueRegister />
              </div>
            </div>
          </>
        } />
        <Route path="/my-issues" element={
          <>
            <Header />
            <div className="flex flex-grow mt-16">
              <Navbar />
              <div className="flex-grow p-4 ml-60">
                <MyIssues />
              </div>
            </div>
          </>
        } />
        <Route path="/admin" element={
          <>
            <Header />
            <div className="flex flex-grow mt-16">
              <Navbar />
              <div className="flex-grow p-4 ml-60">
                <Admin />
              </div>
            </div>
          </>
        } />
        <Route path="/issue/:issueNum" element={
          <>
            <Header />
            <div className="flex flex-grow mt-16">
              <Navbar />
              <div className="flex-grow p-4 ml-60">
                <IssueDetails />
              </div>
            </div>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;