import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

import "../../style/users.css";
import UserEditModalWindow from "../crudComponent/UserEditModalWindow";

const api = axios.create({
  baseURL: "http://localhost:3008",
});

const Users = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const [openUserEditModalWindow, setOpenUserEditModalWindow] = useState(false);

  const getUsersData = () => {
    try {
      api
        .get("/users")
        .then((response) => response.data)
        .then((data) => {
          console.log("GET request receive Users==> ", data);
          setUsers(data);
        });
    } catch (error) {
      console.error("Error is axios: " + error);
    }
  };

  const deleteDropMenuEventHandler = (index) => {
    api.delete(`/user/delete/${index}`).then((res) => {
      
      console.log("delete after user ==> ", res);

      setUsers(res);
    });
  };

  const editDropMenuEventHandler = (index) => {
    setOpenUserEditModalWindow(true);
  };

  const closeEditUserModalWin = () => {
    setOpenUserEditModalWindow(false);
  } 

  useEffect(() => {
    getUsersData();
  }, []);

  return users ? (
    <div>
      <p>Хэрэглэгчид</p>

      <div className="usersFilterGroup">
        <Form>
          <Form.Select aria-label="Default select" className="addUserButtonBg">
            <option value="0">Бүгд</option>
            <option value="1">Шинэ Хэрэглэгч</option>
            <option value="2">Хуучин Хэрэглэгч</option>
          </Form.Select>

          <Form.Control
            type="text"
            placeholder="Хайх"
            name="usersSearchField"
            className="searchUserInput"
          />
        </Form>
      </div>

      <table className="usersTableHeader">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Овог</th>
            <th>Нэр</th>
            <th>И-мейл</th>
            <th>Утас</th>
            <th>Захиалга</th>
            <th>Огноо</th>
            <th>:</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, ind) =>
            user.role !== "admin" && user.role !== "manager" ? (
              <tr key={ind}>
                <td>{user.uid}</td>
                <td>
                  <span>{user.lname}</span>
                </td>
                <td>
                  <span>{user.fname}</span>
                </td>
                <td>
                  <span>{user.email}</span>
                </td>
                <td>
                  <span>{user.phone1}</span>
                </td>
                <td>
                  <span>Orders</span>
                </td>
                <td>
                  <span>Date</span>
                </td>
                <td>
                  <button className="usersCompMenuBtn">
                    :
                    <div className="userEditDropdownMenuButton">
                      <input
                        type="button"
                        value="Засварлах"
                        onClick={() => {
                          editDropMenuEventHandler(ind);
                          setUser(user);
                        }}
                      />
                      <input
                        type="button"
                        value="Устгах"
                        onClick={() => deleteDropMenuEventHandler(ind)}
                      />
                    </div>
                  </button>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
      {openUserEditModalWindow ? <UserEditModalWindow user={user} closeEditUserModalWin={closeEditUserModalWin} /> : null}
    </div>
  ) : null;
};

export default Users;
