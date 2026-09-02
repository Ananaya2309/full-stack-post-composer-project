import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/sidebar.css";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <div className="logo-box">P</div>
        <div>
          <h2>PostComposer</h2>
          <span>Content Manager</span>
        </div>
      </div>

      <nav>

        <Link
          to="/dashboard"
          className={location.pathname === "/dashboard" ? "active" : ""}
        >
          <span>▦</span>
          Dashboard
        </Link>

        <Link
          to="/create-post"
          className={location.pathname === "/create-post" ? "active" : ""}
        >
          <span>＋</span>
          Create Post
        </Link>

        <Link
          to="/mypost"
          className={location.pathname === "/mypost" ? "active" : ""}
        >
          <span>▤</span>
          My Posts
        </Link>

        <Link
          to="/drafts"
          className={location.pathname === "/drafts" ? "active" : ""}
        >
          <span>▱</span>
          Drafts
        </Link>

        <Link
          to="/scheduled"
          className={location.pathname === "/scheduled" ? "active" : ""}
        >
          <span>◷</span>
          Scheduled
        </Link>

        <Link
          to="/profile"
          className={location.pathname === "/profile" ? "active" : ""}
        >
          <span>◯</span>
          Profile
        </Link>

      </nav>

      <div className="sidebar-bottom">

        <button onClick={logout}>
          <span>↪</span>
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;