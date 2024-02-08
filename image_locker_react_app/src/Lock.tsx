import React from "react";
import "./Lock.css";
import Navbar from "./Navbar";

export default function Lock() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="Lock">
        <p className="title">Lock</p>
        <input type="file" className="file-input" />
      </div>
    </>
  );
}
