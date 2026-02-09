import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentLogin() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/students/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      
      localStorage.setItem("token", data.token);

      
      navigate("/student/me");

    } catch (err) {         
      setError(err.message);
    }
  }

  return (
    <div style={{ maxWidth: 350, margin: "50px auto" }}>
      <h2>
         Student Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <input  
            type="username"
            placeholder="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 10 }}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 10 }}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={{ width: "100%", padding: 10 }}>
          Login
        </button>
      </form>
    </div>
  );
}
