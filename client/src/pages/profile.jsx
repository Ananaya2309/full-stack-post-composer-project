import "../css/profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <h2>My Profile</h2>

      <div className="profile-card">
        <label>Name</label>
        <input type="text" value="Ananaya" readOnly />

        <label>Email</label>
        <input type="email" value="ananaya@gmail.com" readOnly />

        <button>Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;