import './App.css';
import logo from './imagenes/freecodecamp-logo.png';
import { Boton } from './Componentes/Boton.js'
import { Pantalla } from './Componentes/Pantalla';
import { BotonClear } from './Componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  

  const [input, setInput] = useState('');
  
  const agregarInput = val => {
    setInput(input + val);
  };

  const manejarClear = () => setInput('');

  const calcularResultado = () => {
    if(input) { //Si la cadena de caracter esta vacía es falsa , sino verdadero
      setInput(evaluate(input));
    } else{
      alert('Por favor ingrese valores para realizar los cálculos');
    }
    
  };


  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src= {logo}
          className = 'logo'
          alt='Logo de freedCodeCamp' />
      </div>

      <div className='calculadora-contenedor'>
        <Pantalla input = { input }/>
        <div className='fila'>
          <Boton manejarClic = {agregarInput}>1</Boton>
          <Boton manejarClic = {agregarInput}>2</Boton>
          <Boton manejarClic = {agregarInput}>3</Boton>
          <Boton manejarClic = {agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {agregarInput}>4</Boton>
          <Boton manejarClic = {agregarInput}>5</Boton>
          <Boton manejarClic = {agregarInput}>6</Boton>
          <Boton manejarClic = {agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {agregarInput}>7</Boton>
          <Boton manejarClic = {agregarInput}>8</Boton>
          <Boton manejarClic = {agregarInput}>9</Boton>
          <Boton manejarClic = {agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic = {calcularResultado}>=</Boton>
          <Boton manejarClic = {agregarInput}>0</Boton>
          <Boton manejarClic = {agregarInput}>.</Boton>
          <Boton manejarClic = {agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear clearInput = {manejarClear}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
