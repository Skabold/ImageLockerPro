import React, { useState } from "react";
import "./Register.css";
import Navbar from "./Navbar";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const apiUrl = `https://localhost:3000/register`;

      const response = await axios.post(apiUrl, {
        email,
        password,
      });

      console.log(response.data);

      // Redirect the user to /login after successful registration
      window.location.href = "/login";
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="Register">
        <p className="title">Register</p>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
            />
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
