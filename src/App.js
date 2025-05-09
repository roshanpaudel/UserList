import React, { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table.js";

function App() {
  const [data, setData] = useState([]);

  const handleFormSubmit = (formData) => {
    setData((prev) => [...prev, formData]);
  };

  return <div className="App"></div>;
}

export default App;
