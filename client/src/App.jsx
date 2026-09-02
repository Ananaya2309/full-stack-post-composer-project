import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import CreatePost from "./pages/createpost";
import MyPost from "./pages/mypost";
import Drafts from "./pages/drafts";
import Scheduled from "./pages/scheduled";
import Profile from "./pages/profile";
import AdminPanel from "./pages/AdminPanel";
import Sidebar from "./components/Sidebar";

function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Without Sidebar */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* With Sidebar */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/mypost" element={<MyPost />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/scheduled" element={<Scheduled />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;