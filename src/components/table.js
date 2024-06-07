import React from 'react';


function Table() {
  const data = [
    { id: 1, name: 'books', price: 10000 },
    { id: 2, name: 'pens', price: 2000 },
    { id: 3, name: 'pencils', price: 3000 },
    { id: 4, name: 'colors', price: 4000 },
  ];

  return (
    <div className="list">
      <h2>My Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

