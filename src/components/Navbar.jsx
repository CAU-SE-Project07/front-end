import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed left-0 top-16 h-full bg-gray-800 p-4 w-60"> {}
      <div className="flex flex-col gap-4 text-white text-2xl mt-auto mb-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        <Link to="/signup" className="hover:text-gray-300">Signup</Link>
      </div>
    </nav>
  );
};