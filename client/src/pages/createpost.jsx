import axios from "axios";
import { useState } from "react";
import "../css/createpost.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState(null);
  const [platforms, setPlatforms] = useState([]);
  const [status, setStatus] = useState("Draft");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const limits = {
    Instagram: 2200,
    Facebook: 63206,
    LinkedIn: 3000,
    Snapchat: 280,
  };

  const handlePlatform = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      setPlatforms([...platforms, value]);
    } else {
      setPlatforms(platforms.filter((p) => p !== value));
    }
  };

  const handleDraft = () => {
    alert("Draft Saved Successfully");
  };

  const handlePublish = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/posts",
        {
          title,
          description,
          platforms,
          status,
          scheduleDate: date,
          scheduleTime: time,
        }
      );

      alert("Post Created Successfully");

      setTitle("");
      setDescription("");
      setMedia(null);
      setPlatforms([]);
      setStatus("Draft");
      setDate("");
      setTime("");

      console.log(response.data);
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="create">
      <h1>Create New Post</h1>

      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        rows="7"
        placeholder="Write Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <label>Upload Media</label>

      <input
        type="file"
        onChange={(e) => setMedia(e.target.files[0])}
      />

      <h3>Select Platforms</h3>

      <div className="platform">

        <label>
          <input
            type="checkbox"
            value="Instagram"
            checked={platforms.includes("Instagram")}
            onChange={handlePlatform}
          />
          Instagram
        </label>

        <label>
          <input
            type="checkbox"
            value="Facebook"
            checked={platforms.includes("Facebook")}
            onChange={handlePlatform}
          />
          Facebook
        </label>

        <label>
          <input
            type="checkbox"
            value="LinkedIn"
            checked={platforms.includes("LinkedIn")}
            onChange={handlePlatform}
          />
          LinkedIn
        </label>

        <label>
          <input
            type="checkbox"
            value="Snapchat"
            checked={platforms.includes("Snapchat")}
            onChange={handlePlatform}
          />
          Snapchat
        </label>

      </div>

      <h3>Status</h3>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Draft</option>
        <option>Published</option>
        <option>Scheduled</option>
      </select>

      <h3>Schedule</h3>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <h3>Character Validation</h3>

      {platforms.map((item) => (
        <p key={item}>
          {item} : {description.length}/{limits[item]}
          {description.length <= limits[item] ? " ✅" : " ❌"}
        </p>
      ))}

      <div className="buttons">

        <button onClick={handleDraft}>
          Save Draft
        </button>

        <button onClick={handlePublish}>
          Publish
        </button>

      </div>

    </div>
  );
}

export default CreatePost;