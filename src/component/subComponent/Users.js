import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  let [users, setUsers] = useState([]);

  const getUsersData = () => {
    try {
      axios
        .get("http://localhost:3007/users")
        .then((response) => setUsers(response.data));
    } catch (error) {
      console.error("Error is axios: " + error);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return users ? (
    <div>
      <p>Users page</p>
      <table>
        <thead>
          <tr>
            <th>~</th>
            <th>Хэрэглэгч нэр</th>
            <th>Нууц үг</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, ind) => (
            <tr key={ind}>
              <td>{ind + 1}</td>
              <td>
                <span>{user.name}</span>
              </td>
              <td>
                <span>{user.password}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default Users;
