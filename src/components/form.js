import React from "react";

export const Form = () => {
  return (
    <div className="w-50 p-5 m-auto mt-5 rounded shadow-lg">
      <form>
        <div class="row">
          <div class="col">
            <select id="inputState" class="form-select">
              <option selected>Choose..</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
          <div class="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
          <div className="col d-grid">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};
