import './App.css';
import logo from './imagenes/freecodecamp-logo.png';
import { Boton } from './Componentes/Boton.js'
import { Pantalla } from './Componentes/Pantalla';
import { BotonClear } from './Componentes/BotonClear';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src= {logo}
          className = 'logo'
          alt='Logo de freedCodeCamp' />
      </div>

      <div className='calculadora-contenedor'>
        <Pantalla />
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
