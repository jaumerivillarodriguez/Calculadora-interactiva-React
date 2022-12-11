import React from "react";
import '../Css/Boton.css';

function Boton (props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return(
    <div 
      className= {`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
      onClick = {()=> props.manejarClic(props.children)}>  {/*llama a una funcion que llama a otra función, sino solo devolveria un valor */}
      {props.children}
    </div>
  );

}

export { Boton };