import React from "react";

export const Form = () => {
  return (
    <div className="w-50 p-5 m-auto mt-5 rounded shadow-lg">
      <form>
        <div class="row">
          <div class="col">
            <select name="gender" id="inputState" class="form-select" required>
              <option selected>Choose..</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
          <div class="col">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="User name"
              aria-label="User name"
              required
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
