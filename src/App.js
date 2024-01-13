// FilterComponent.js
import React, { useState } from 'react';
import './App.css';

const dummyData = [
    { id: 1, name: 'John Doe', age: 25, gender: 'Male' },
    { id: 2, name: 'Jane Doe', age: 30, gender: 'Female' },
    { id: 3, name: 'Bob Smith', age: 22, gender: 'Male' },
    { id: 4, name: 'Alice Johnson', age: 28, gender: 'Female' },
    { id: 5, name: 'Chris Wilson', age: 35, gender: 'Male' },
    { id: 6, name: 'Emily Davis', age: 29, gender: 'Female' },
    { id: 7, name: 'Michael Brown', age: 40, gender: 'Male' },
    { id: 8, name: 'Sophia Miller', age: 27, gender: 'Female' },
    { id: 9, name: 'Daniel Lee', age: 32, gender: 'Male' },
    
];
const App = () => {
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState(dummyData);

  const handleFilterChange = (e) => {
    const value = e.target.value.toLowerCase();
    setFilter(value);


    const filteredResults = dummyData.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.gender.toLowerCase().includes(value) ||
        item.age.toString().includes(value)
    );

    setFilteredData(filteredResults);
  };

  return (
    <div className="container">
   <div><h1>Data Filtering App</h1></div>
      <input
        type="text"
        placeholder="Search by name, age, or gender"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age} years old - {item.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;