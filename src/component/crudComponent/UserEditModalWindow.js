import axios from "axios";
import { useEffect, useState } from "react";

const UserEditModalWindow = (props) => {
  const { user, closeEditUserModalWin } = props;
  const [updateUser, setUpdateUser] = useState(user);

  const onCancel = () => {
    alert("Are you really exit");
    closeEditUserModalWin();
  };


  const editUserEventHandler = (e) => {
    e.preventDefault();

    let fname = e.target.firstName.value;
    let lname = e.target.lastName.value;
    let phone1 = e.target.phoneNum1.value;
    let phone2 = e.target.phoneNum2.value;
    let address = e.target.address.value;
    let email = e.target.email.value;
    let password = e.target.password2.value;
    let role = "client";

    // Object or Array
    let newUser = [fname, lname, phone1, phone2, address, email, password, role];
        
    console.log("Save Object:==> ", newUser);

    // USER UID
    if(user) {
        axios.put(`http://localhost:3008/user/${user.uid}`, newUser)
        .then((res) => setUpdateUser(res));

        console.log("new user obj::: ", newUser);
    } else {
        axios.post("http://localhost:3008/user/", newUser)
        .then((res) => setUpdateUser(res));
        
        
        // UID backend tald deer check
        console.log("new user obj::: ", newUser);
    }
  };

  useEffect(() => {
    console.log("User====> ", user);
  }, [])
  

  return (
    <div>
      <form onSubmit={editUserEventHandler}>
        <div className="updateUser-modalBg">
          <div className="updateUser-modalContainer">
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
            <div key={updateUser.uid} className="updateProd-ModalBody">
              <div className="updateUserModalForm">
                <div className="updateUser-inputGroupRow">
                  <div className="updateUser-inputField">
                    <label htmlFor="firstName">Нэр</label>
                    <input
                      type="text"
                      name="firstName"
                      defaultValue={updateUser.fname}
                    />
                  </div>
                  <div className="updateUser-inputField">
                    <label htmlFor="lastName">Овог</label>
                    <input
                      type="text"
                      name="lastName"
                      defaultValue={updateUser.lname}
                    />
                  </div>
                </div>

                <div className="updateUser-inputGroupRow">
                  <div className="updateUser-inputField">
                    <label htmlFor="phoneNum1">Утасны дугаар 1</label>
                    <input
                      type="text"
                      name="phoneNum1"
                      defaultValue={updateUser.phone1}
                    />
                  </div>
                  <div className="updateUser-inputField">
                    <label htmlFor="phoneNum2">Утасны дугаар 2</label>
                    <input
                      type="text"
                      name="phoneNum2"
                      defaultValue={updateUser.phone2}
                    />
                  </div>
                </div>

                <div className="updateUser-inputGroupRow">
                  <div className="updateUser-inputField">
                    <label htmlFor="address">Хаяг</label>
                    <input
                      type="text"
                      name="address"
                      defaultValue={updateUser.address}
                    />
                  </div>
                  <div className="updateUser-inputField">
                    <label htmlFor="email">И-мейл</label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={updateUser.email}
                    />
                  </div>
                </div>

                <div className="updateUser-inputGroupRow">
                  <div className="updateUser-inputField">
                    <label htmlFor="password1">Нууц үг</label>
                    <input type="text" name="password1" defaultValue={updateUser.password} />
                  </div>
                  <div className="updateUser-inputField">
                    <label htmlFor="password2">Нууц үг давтан оруулна</label>
                    <input type="text" name="password2" defaultValue="******" />
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
              <button type="submit" >Хадгалах</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UserEditModalWindow;
