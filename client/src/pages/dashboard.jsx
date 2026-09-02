import { Link } from "react-router-dom";
import "../css/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="sidebar">

        <h2>PostComposer</h2>
        <p>Content Manager</p>

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create-post">Create Post</Link>
        <Link to="/mypost">My Posts</Link>
        <Link to="/drafts">Drafts</Link>
        <Link to="/scheduled">Scheduled</Link>
        <Link to="/profile">Profile</Link>

        <Link to="/" className="logout">
          Logout
        </Link>

      </div>

      <div className="main">

        <h1>Welcome 👋</h1>

        <p className="subtitle">
          Manage your social media content from one place.
        </p>

        <div className="cards">

          <div className="card">
            <h3>Total Posts</h3>
            <h2>12</h2>
          </div>

          <div className="card">
            <h3>Published</h3>
            <h2>8</h2>
          </div>

          <div className="card">
            <h3>Scheduled</h3>
            <h2>3</h2>
          </div>

          <div className="card">
            <h3>Drafts</h3>
            <h2>1</h2>
          </div>

        </div>

        <div className="recent">

          <h2>Recent Activity</h2>

          <table>

            <thead>
              <tr>
                <th>Title</th>
                <th>Platform</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Summer Sale</td>
                <td>Instagram</td>
                <td>Published</td>
              </tr>

              <tr>
                <td>New Product</td>
                <td>Facebook</td>
                <td>Scheduled</td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;