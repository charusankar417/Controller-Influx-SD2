import React from "react";
import "./Events.css";
import Navbar from "./Navbar";
import toast from "react-hot-toast";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Members.css";

const Members = () => {
  const [users, setUsers] = useState([]);
  const event = useEffect(() => {
    axios
      .get("http://localhost:8000/member/details")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div id="main-bg">
      <Navbar />
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
