import React from "react";

function Table({ data }) {
  return (
    <table border="1" cellPadding="5">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
