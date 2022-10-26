import logo from './logo.svg';
import './App.css';
import {Campos} from './Campos/campo';
import{Galeria} from './Informacion-General/galeria';
import {Reserva} from './Reservas/reserva';


function App() {
  return (
    <div>
      <Campos/>
      <Galeria/>
      <Reserva/>
    </div>
  );
}

export default App;
