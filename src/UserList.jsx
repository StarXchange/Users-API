import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div styles={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>User List</h1>
      {listOfUsers.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {listOfUsers.map((user) => (
            <li
              key={user.id}
              style={{
                backgroundColor: "#f4f4f4",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{user.name}</h3>
              <p>
                <strong>Email:</strong>
                {user.email}
              </p>
              <p>
                <strong>Phone:</strong>
                {user.phone}
              </p>
              <p>
                <strong>Address:</strong>
                {user.street}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default UserList;
