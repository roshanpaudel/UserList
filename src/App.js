import React, { useState } from "react";
import { Form } from "./components/Form.js";
import { Table } from "./components/Table.js";

const App = () => {
  return (
    <div className="container pt-4">
      <h2 className="text-center">User List</h2>
      <hr />
      {/* form component  */}
      <Form />

      {/*  table component  */}
      <Table />
    </div>
  );
};

export default App;
