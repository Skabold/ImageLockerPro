// Login.js

import React from "react";
import "./Login.css";
import Navbar from "./Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="Login">
        <p className="title">Login</p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
