import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  let [users, setUsers] = useState([]);

  const getUsersData = async () => {
    const { data } = await axios.get(`http://localhost:3007/users`);
    setUsers(data);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  console.log(users);

  return (
    <React.Fragment>
      <div>
        <p>Users page</p>
        {users || (
          <table>
            <thead>
              <th>~</th>
              <th>Хэрэглэгч нэр</th>
              <th>Нууц үг</th>
            </thead>
            <tbody>
              {users.map((user, ind) => {
                <tr key={ind}>
                  <td>{ind + 1}</td>
                  <td>
                    <span>{user.name}</span>
                  </td>
                  <td>
                    <span>{user.password}</span>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        )}
      </div>
    </React.Fragment>
  );
};
export default Users;
