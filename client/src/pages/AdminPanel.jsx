import { useEffect, useState } from "react";
import api from "../api";

function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get("/admin/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
      alert("Unable to fetch users");
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await api.get("/admin/posts");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
      alert("Unable to fetch posts");
    }
  };

  return (
    <div className="admin-panel">

      <h1>Admin Panel 👑</h1>

      <h2>Users</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>


      <h2>All Posts</h2>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Platform</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr key={post._id}>
              <td>{post.title}</td>

              <td>
                {post.platforms?.join(", ")}
              </td>

              <td>{post.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default AdminPanel;