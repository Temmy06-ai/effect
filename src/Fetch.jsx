import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Fetch() {
  const [users, setusers] = useState([]);
  const [change, setchange] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    const eachuser = fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setusers(json);
      });
  }, []);
  //   useEffect(() => {
  //     console.log("state changed");
  //   }, [change]);

  // console.log(users);

  return (
    <div className="allCards">
      {users.map((user) => (
        <div
          key={user.id}
          className="card"
          onClick={() => navigation(`/${user.id}`)}
        >
          <div className="names">
            <h2>{user.name.slice(0, 18) + "...."}</h2>
            <h4>{user.username}</h4>
            <p>{user.email}</p>
          </div>
          <div className="others">
            <div className="street">Street: {user.address.street}</div>
            <div className="city">City: {user.address.city}</div>
            <div className="phone">Phone Number: {user.phone}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Fetch;
