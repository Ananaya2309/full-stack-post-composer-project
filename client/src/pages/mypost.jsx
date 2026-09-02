import { useEffect, useState } from "react";
import api from "../api";
import "../css/mypost.css";

function MyPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await api.get("/posts");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
      alert("Unable to fetch posts");
    }
  };

  return (
    <div className="myposts">

      <h1>My Posts</h1>

      <table>

        <thead>
          <tr>
            <th>Title</th>
            <th>Platform</th>
            <th>Media</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {posts.length > 0 ? (
            posts.map((item) => (
              <tr key={item._id}>

                <td>{item.title}</td>

                <td>
                  {Array.isArray(item.platforms)
                    ? item.platforms.join(", ")
                    : item.platform}
                </td>

                <td>
                  {item.media ? (
                    <img
                      src={item.media}
                      alt={item.title}
                      className="post-image"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>

                <td>{item.status}</td>

                <td>
                  {item.scheduleDate
                    ? new Date(item.scheduleDate).toLocaleDateString()
                    : item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString()
                    : "-"}
                </td>

                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                No posts found
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}

export default MyPosts;