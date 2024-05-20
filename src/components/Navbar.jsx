import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  // 네비게이션 바 클릭 시 해당 페이지 파란색 버튼 생성
  const getNavLinkClass = (path) => {
    return location.pathname === path 
      ? "text-white bg-gray-800 rounded-lg p-2" 
      : "text-black hover:text-blue-500";
  };

  // 스타일 객체 생성
  const activeLinkStyle = {
    width: '160px',
    textAlign: 'center'
  };

  return (
    <nav className="fixed left-0 top-16 h-full w-60 border-r border-black flex flex-col justify-start pt-4">
      <div className="flex flex-col gap-8 items-center">
        <Link to="/" className={getNavLinkClass("/")} style={location.pathname === "/" ? activeLinkStyle : {}}>Home</Link>
        <Link to="/login" className={getNavLinkClass("/login")} style={location.pathname === "/login" ? activeLinkStyle : {}}>Login</Link>
        <Link to="/signup" className={getNavLinkClass("/signup")} style={location.pathname === "/signup" ? activeLinkStyle : {}}>Signup</Link>
      </div>
    </nav>
  );
};
