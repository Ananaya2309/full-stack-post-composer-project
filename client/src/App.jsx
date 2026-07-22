import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import CreatePost from "./pages/createpost";
import MyPost from "./pages/mypost";
import Drafts from "./pages/drafts";
import Scheduled from "./pages/scheduled";
import Profile from "./pages/profile";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/create-post" element={<CreatePost />} />

        <Route path="/mypost" element={<MyPost />} />
        <Route path="/drafts" element={<Drafts />} />

<Route path="/scheduled" element={<Scheduled />} />

<Route path="/profile" element={<Profile />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;