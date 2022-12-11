import React from "react";
import '../Css/BotonClear.css';

const BotonClear = (props) => (
  <div className = 'boton-clear'>
    {props.children}
  </div>
);

export { BotonClear };