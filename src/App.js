import './App.css';
import Boton from './components/botones';
import Display  from './components/display';
import Clear from './components/clear';
import { useState } from 'react';
import {evaluate} from 'mathjs';
//!se debe instalar mathjs para poder usar la funcion evaluate con (npm install mathjs)

function App() {

  const [display, setDisplay] = useState('');
//!las funciones se pueden definir de esta forma o como funcion anonima tal como se hizo abajo en el clear
  const agregarImput = valor=>{
    setDisplay(display+valor);
  }

  const calcular =(valor)=>{
    if (display){
    setDisplay(evaluate(display));
    }
    else{
      setDisplay('por favor ingrese valores antes de calcular');
      setTimeout(()=>{setDisplay('')}, 1590);
    }
  }



  return (
    <div className="App">

      <h1 className='title'> 
      Calculadora interactiva 
      </h1>

      <div className='calculadora'>

        <Display input={display}/>
        
          <div className='fila'>
          <Boton manejarClick={agregarImput}>1</Boton> 
          <Boton manejarClick={agregarImput}>2</Boton> 
          <Boton manejarClick={agregarImput}>3</Boton> 
          <Boton manejarClick={agregarImput}>+</Boton>  
        
        </div>


        <div className='fila'>
          <Boton manejarClick={agregarImput}>4</Boton>  
          <Boton manejarClick={agregarImput}>5</Boton>  
          <Boton manejarClick={agregarImput}>6</Boton> 
          <Boton manejarClick={agregarImput}>-</Boton>         
        </div>


        <div className='fila'>
          <Boton manejarClick={agregarImput}>7</Boton> 
          <Boton manejarClick={agregarImput}>8</Boton> 
          <Boton manejarClick={agregarImput}>9</Boton>  
          <Boton manejarClick={agregarImput}>*</Boton>         
        </div>


        <div className='fila'>
          <Boton manejarClick={agregarImput}>0</Boton>  
          <Boton manejarClick={agregarImput}> . </Boton> 
          <Boton manejarClick={calcular}> = </Boton> 
          <Boton manejarClick={agregarImput}>/</Boton>         
        </div>

        
        <div className='fila' id='clear'> 
        
          <Clear manejarClick={() => setDisplay('')} >Clear</Clear>
        </div>


      </div>

    </div>
  );
  //!arrow function in clear button
}

export default App;
