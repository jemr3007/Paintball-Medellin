import React from 'react';
import './App.css';
import './Navbar/Navbar.css';
import {Campos} from './Campos/campo';
import{Galeria} from './Informacion-General/galeria';
import Navbar from './Navbar/Navbar';
import {Reserva} from './Reservas/reserva';


function App() {
  return (
    <div>
      <Navbar/>
      <Campos/>
      <Galeria/>
      <Reserva/>
    </div>
  );
}

export default App;
