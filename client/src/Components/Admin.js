import React from "react";
import "./Admin.css";
import Navbar from "./Navbar";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router";

const Admin = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log(user);

  const event = async (e) => {
    e.preventDefault();

    navigate("/event/create");
  };
  const attendance = async (e) => {
    e.preventDefault();
    navigate("/attendance");
  };
  const dues = async (e) => {
    e.preventDefault();
    navigate("/dues");
  };
  const QForm = async (e) => {
    e.preventDefault();
    navigate("/customquestion/form");
  };

  const member = async (e) => {
    e.preventDefault();
    navigate("/member/details");
  };
  return (
    <div id="main">
      <Navbar />
      <div className="welcome">{!!user && <h1>Hi {user.username}!</h1>}</div>
      <div className="features">
        <br></br>
        <ul>
          <button class="button-17" onClick={event}>
            Create Event
          </button>
          <br></br>
          <button class="button-17" onClick={attendance}>
            Check Attendance
          </button>
          <br></br>
          <button class="button-17" onClick={dues}>
            Check Dues
          </button>
          <br></br>
          <button class="button-17" onClick={QForm}>
            Custom Question Form
          </button>
          <button class="button-17" onClick={member}>
            Member Details
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
