import React, {useState} from 'react';
import './App.css';
import Formulario from './components/formulario';
import Results from './components/escribeForm';

function App() {

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "" 
  });


  return (
    <div className="App">
          <h1>Primer formulario</h1>
          <Formulario inputs={state} setInputs={setState}/>
          <Results data ={state}/>

      
       
    </div>
  );
}

export default App;
