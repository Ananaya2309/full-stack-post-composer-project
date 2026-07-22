import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try{

        const response = await axios.post(
            "http://localhost:5000/api/auth/login",
            {
                email,
                password
            }
        );

        localStorage.setItem("token",response.data.token);

        localStorage.setItem("user",
        JSON.stringify(response.data.user));

        alert("Login Successful");

        navigate("/dashboard");

    }

    catch(error){

        alert(error.response.data.message);

    }

}

  return (

    <div className="login-container">

      <div className="login-card">

        <h1>Welcome Back 👋</h1>

        <p>Login to manage your social media posts.</p>

        <form onSubmit={handleLogin}>

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

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>

    </div>

  );
}

export default Login;