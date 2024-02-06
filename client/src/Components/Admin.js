import React from "react";
import "./Admin.css";
import Navbar from "./Navbar";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Admin = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div id="main">
      <Navbar />
      <div className="welcome">
        <h1>Admin Dashboard </h1>
        {!!user && <h1>Hi {user.username}!</h1>}
      </div>
      <div className="features">
        <br></br>
        Welcome to the Admin Dashboard!
        <ul>
          <li href="#">Create Event</li>
          <li href="#">Mark Attendance</li>
          <li href="#">View QR and Registration</li>
          <li href="#">Check Dues</li>
          <li href="#">Add Custom Q's</li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
