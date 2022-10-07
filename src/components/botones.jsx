import React from 'react';
import '../stylesheets/botones.css';

function Boton(props) {
  const operador=valor=>{
      return isNaN(valor) && (valor !== '.') && (valor !== '=')
  }
//!se puede hacer esto con condiciones y seria mas facil de leer pero mas largo 
  return (   
    <div className={`boton-conten ${operador(props.children)?'operador' : ''}`.trimEnd() }  onClick={ ()=>props.manejarClick(props.children)}>
      
      {props.children}

    </div>
  )
}
//!en el onClick se crea la funcion flecha para que no de error

export default Boton