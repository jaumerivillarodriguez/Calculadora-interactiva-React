import React from "react";
import '../Css/Boton.css';

function Boton (props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return(
    <div className= {`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>  {/*si la funcion esOperador es true entonces le asignamos la clase operador , sino cadena de caracteres vacia y eliminamos espacios del final*/}
      {props.children}
    </div>
  );

}

export { Boton };