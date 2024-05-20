import { Link } from "react-router-dom"

export const Navbar = () => {
    return <div className="flex gap-3 text-black text-4xl">
        <Link to={"/"}>home</Link>
        <Link to={"/login"}>login</Link>
        <Link to={"/signup"}>signup</Link>
        </div>
}