// src/Routes.js
import React from 'react';
import { Routes } from 'react-router-dom';
import Pets from './Pets';
import PetForm from './PetForm';

const MemoryRouter = () => (
  <MemoryRouter>
    <Routes path="/" element={Pets} />
    <Routes path="/add-pet" element={PetForm} />
  </MemoryRouter>
);

export default Routes;
