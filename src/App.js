import React, { useState } from "react";
import { Form } from "./components/Form.js";
import { Table } from "./components/Table.js";

const App = () => {
  const [userList, setUserList] = useState([]);
  const addUser = (userObj) => {
    setUserList([...userList, userObj]);
  };
  console.log("this is:", userList);
  return (
    <div className="container pt-4">
      <h2 className="text-center">User List</h2>
      <hr />
      {/* form component  */}
      <Form addUser={addUser} />

      {/*  table component  */}
      <Table userList={userList} />
    </div>
  );
};

export default App;
