import React, { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3008",
});

const Users = () => {
  let [users, setUsers] = useState([]);

  const getUsersData = async () => {
    try {
      const tempUsers = await api
        .get("/users")
        .then((response) => response.data);
        console.log("GET request send Users==> ", tempUsers);
        setUsers(tempUsers[0]);
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
