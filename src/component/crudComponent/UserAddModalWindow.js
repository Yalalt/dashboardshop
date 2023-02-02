import axios from "axios";
import { useState } from "react";

import "../../style/UserAddModalWindowStyle.css";

const UserAddModalWindow = (props) => {
  const { setUsers, closeUserAddModalHandler } = props;
  const [updateUser, setUpdateUser] = useState();

  const genRandomHexUsersID = (size) =>
    [...Array(size)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");

  const onCancel = () => {
    closeUserAddModalHandler();
  };

  const editUserEventHandler = (e) => {
    e.preventDefault();

    let fname = e.target.firstName.value;
    let lname = e.target.lastName.value;
    let phone1 = e.target.phoneNum1.value;
    let phone2 = e.target.phoneNum2.value;
    let address = e.target.address.value;
    let email = e.target.email.value;
    let password =
      e.target.password1.value === e.target.password2.value
        ? e.target.password2.value
        : alert("Нууц үгнүүд ижил байх ёстой");
    let role = "client";

    // NEW USER Object
    let newUser = {
      uid: "u" + genRandomHexUsersID(8),
      fname: fname,
      lname: lname,
      phone1: phone1,
      phone2: phone2,
      address: address,
      email: email,
      password: password,
      role: role,
    };
    console.log("NEW==> ", newUser);

    if (newUser) {
      axios
        .post("http://localhost:3008/user", newUser)
        .then((res) => setUsers(res.data.userData));
    } else {
        console.log("Aldaa garlaa!!!");
    }
    onCancel();
  };

  return (
    <div>
      <div className="updateUser-modalBg">
        <div className="updateUser-modalContainer">
          <form onSubmit={editUserEventHandler}>
            <div className="updateUser-titleCloseBtn">
              <button
                onClick={() => {
                  onCancel();
                }}
              >
                x
              </button>
            </div>
            <div className="updateUser-ModalTitle">
              <span>Хэрэглэгчийн мэдээлэл засварлах</span>
            </div>
            {/* UID */}
            <div key={genRandomHexUsersID(4)} className="updateProd-ModalBody">
              <div className="updateUserModalForm">
                <div className="updateUser-inputGroupRow">
                  <div className="updateUser-inputField">
                    <label htmlFor="lastName">Овог</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Овог"
                    />
                  </div>
                  <div className="updateUser-inputField">
                    <label htmlFor="firstName">Нэр</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Нэр"
                    />
                  </div>
                </div>

                <div className="updateUser-inputGroupRow">
                  <div className="updateUser-inputField">
                    <label htmlFor="phoneNum1">Утасны дугаар 1</label>
                    <input
                      type="text"
                      name="phoneNum1"
                      placeholder="Утасны дугаар"
                    />
                  </div>
                  <div className="updateUser-inputField">
                    <label htmlFor="phoneNum2">Утасны дугаар 2</label>
                    <input
                      type="text"
                      name="phoneNum2"
                      placeholder="Утасны дугаар"
                    />
                  </div>
                </div>

                <div className="updateUser-inputGroupRow">
                  <div className="updateUser-inputField">
                    <label htmlFor="address">Хаяг</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Хаяг"
                    />
                  </div>
                  <div className="updateUser-inputField">
                    <label htmlFor="email">И-мейл</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="И-мейл хаяг"
                    />
                  </div>
                </div>

                <div className="updateUser-inputGroupRow">
                  <div className="updateUser-inputField">
                    <label htmlFor="password1">Нууц үг</label>
                    <input
                      type="text"
                      name="password1"
                      placeholder="Нууц үгээ оруулна"
                    />
                  </div>
                  <div className="updateUser-inputField">
                    <label htmlFor="password2">Нууц үг давтан оруулна</label>
                    <input type="text" name="password2" placeholder="Нууц үгээ оруулна" />
                  </div>
                </div>
              </div>
            </div>

            <div className="updateUser-ModalFooter">
              <button
                onClick={() => {
                  onCancel();
                }}
                id="cancelBtn"
              >
                Гарах
              </button>
              <button type="submit">Хадгалах</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserAddModalWindow;
