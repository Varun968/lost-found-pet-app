// src/components/Pets.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/api/pets');
      setPets(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Pets</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet._id}>
            {pet.name} - {pet.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pets;
