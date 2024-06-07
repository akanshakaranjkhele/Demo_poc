import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "./UserReducer";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //const [phone, setPhone] = useState("");

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };
  return (
    <div>
      <h2>Create User </h2>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="w-50 border bg-secondary text-white p-5">
          <h3>Add new user</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Enter user name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone:
              </label>
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div> */}

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter user email-id"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <button className="btn btn-info">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
