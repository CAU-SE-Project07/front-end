import { Navbar } from "./components/Navbar";
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<div>home</div>}/>
        <Route path={"/login"} element={<div>login</div>}/>
        <Route path={"/signup"} element={<div>signup</div>}/>
      </Routes>
    </div>
  );
}

export default App;