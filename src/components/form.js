import React, { useState } from "react";

export const Form = ({ addUser }) => {
  const [user, setUser] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };

  return (
    <div className="w-50 p-3 m-auto mt-5 rounded shadow-lg">
      <form action="" onSubmit={handleOnSubmit}>
        <div className="row g-2">
          <div className="col-md-3">
            <select
              name="gender"
              id="inputState"
              className="form-select"
              defaultValue=""
              required
              onChange={handleOnChange}
            >
              <option value="">Choose..</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="User name"
              aria-label="User name"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};
