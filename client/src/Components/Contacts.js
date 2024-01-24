import React from "react";
import "./Contacts.css";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="main">
      <h1>Join Knight Hacks</h1>
      <p>
        <Link className="link" href="https://knighthacks.org/.">
          {" "}
          KnightHacks
        </Link>
        <br />
        <br />
        If you are interested in donating to the mission of Knight Hacks, please
        email Dr. Gordon at apgordon@ucf.edu.
      </p>
    </div>
  );
};

export default Contacts;
