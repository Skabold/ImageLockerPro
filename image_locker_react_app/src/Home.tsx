// Home.js

import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="Home">
        <main>
          <p>Home</p>
          <p>
            Welcome to ImageLockerPro, Register then login then you can go and lock image in our bucket (we will send
            you a confirmation email).
          </p>
          <p>PS : you won't see the image ever again</p>
          <p>
            PS2 : we haven't paid the email service so we are the one receiving the mail, we can't change that sorry
          </p>
        </main>
      </div>
    </>
  );
}
