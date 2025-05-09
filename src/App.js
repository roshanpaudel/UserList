import React, { useState } from "react";
import { Form } from "./components/Form.js";
import { Table } from "./components/Table.js";

const App = () => {
  return (
    <div className="container">
      {/* form component  */}
      <Form />

      {/*  table component  */}
      <Table />
    </div>
  );
};

export default App;
