import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function EachUsers() {
  const navigation = useNavigate();
  const { userId } = useParams();

  console.log(userId);

  return (
    <div className="each">
      <nav>
        <button onClick={() => navigation("/")}>Back</button>
        <h1>Jenama</h1>
      </nav>
      <div className="first_box">
        <h2>Username: Toyin</h2>
        <h3>E-mail: toyin22@gmail.com</h3>
        <h3>Phone: 09033678947</h3>
        <h3>Website: google.com</h3>
        <h3>City: Agodo</h3>
        <h3>company: Bafuto</h3>
      </div>
    </div>
  );
}

export default EachUsers;
