import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/register.css";

function Register() {

    const navigate = useNavigate();

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    const handleRegister = async (e) => {
  e.preventDefault();

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      {
        name,
        email,
        password,
      }
    );

    console.log("Register Success:", response.data);

    alert(response.data.message);

    navigate("/");

  } catch (error) {

    console.log("Register Error:", error);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Response:", error.response.data);

      alert(error.response.data.message);
    } else {
      alert(error.message);
    }
  }
};

    return(

        <div className="register-container">

            <div className="register-card">

                <h1>Create Account</h1>

                <p>Create your account to continue.</p>

                <form onSubmit={handleRegister}>

                    <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />

                    <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />

                    <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />

                    <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    />

                    <button>
                        Register
                    </button>

                </form>

                <p>

                    Already have an account?

                    <Link to="/"> Login</Link>

                </p>

            </div>

        </div>

    );

}

export default Register;