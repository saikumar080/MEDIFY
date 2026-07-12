import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import HomePage from './Pages/Home/Home';
import HospitalDetails from './Pages/Search/HospitalDetails';
import MyBookings from './Pages/MyBookings/MyBookings';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/hospital/:id'element={<HospitalDetails />} />
    <Route path='my-bookings' element={<MyBookings />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
