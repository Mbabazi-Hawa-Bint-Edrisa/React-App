import React from 'react';

const cars = [
  { name: 'Audi', model: 'A4', yearOnMarket: 1994 },
  { name: 'Land Cruiser', model: 'Prado', yearOnMarket: 1984 },
  { name: 'Seinta', model: 'SX', yearOnMarket: 2000 }
];

const Car = () => (
  <div className="cars">
    <h2>My Cars</h2>
    {cars.map(({ name, model, yearOnMarket }) => (
      <div key={name + model}>
        <p>Name: {name}</p>
        <p>Model: {model}</p>
        <p>Year on Market: {yearOnMarket}</p>
      </div>
    ))}
  </div>
);

export default Car;
