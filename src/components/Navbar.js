import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  // 네비게이션 바 클릭 시 해당 페이지 파란색 버튼 생성
  const getNavLinkClass = (path) => {
    return location.pathname === path 
      ? "text-white bg-blue-500 rounded-lg p-2" 
      : "text-black hover:text-blue-500";
  };

  // 스타일 객체 생성
  const activeLinkStyle = {
    width: '160px',
    textAlign: 'center',
    borderRadius: '10px',
  };

  return (
    <nav className="fixed left-0 top-20 h-full w-60 bg-white shadow-md flex flex-col justify-start pt-4">
      <div className="flex flex-col gap-8 items-center">
        <Link to="/" className={getNavLinkClass("/")} style={location.pathname === "/" ? activeLinkStyle : {}}>Home</Link>
        <Link to="/issue-register" className={getNavLinkClass("/issue-register")} style={location.pathname === "/issue-register" ? activeLinkStyle : {}}>이슈 등록</Link>
        <Link to="/stats" className={getNavLinkClass("/stats")} style={location.pathname === "/stats" ? activeLinkStyle : {}}>통계 분석</Link>
      </div>
      <hr className="my-4 w-full border-t border-gray-300" />
      <div className="flex flex-col gap-8 items-center">
        <Link to="/my-issues" className={getNavLinkClass("/my-issues")} style={location.pathname === "/my-issues" ? activeLinkStyle : {}}>My Issues</Link>
        <Link to="/admin" className={getNavLinkClass("/admin")} style={location.pathname === "/admin" ? activeLinkStyle : {}}>Admin</Link>
      </div>
    </nav>
  );
};