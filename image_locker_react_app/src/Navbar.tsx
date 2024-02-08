import React from "react";
import logo from "./logo.svg";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="Navbar">
      <p>Navbar</p>
      <img src={logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/lock">Lock</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
