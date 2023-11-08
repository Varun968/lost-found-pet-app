// src/components/PetForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PetForm = () => {
  const [newPet, setNewPet] = useState({ name: '', type: '', status: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/pets', newPet);
    console.log('New pet added:', response.data);
  };

  return (
    <div>
      <h1>Add a Pet</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newPet.name}
          onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Type"
          value={newPet.type}
          onChange={(e) => setNewPet({ ...newPet, type: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status"
          value={newPet.status}
          onChange={(e) => setNewPet({ ...newPet, status: e.target.value })}
        />
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
};

export default PetForm;
