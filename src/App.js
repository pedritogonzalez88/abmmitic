import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Navbar from './components/Navegacion';
import Datospersonales from './components/Funcionarios/DatosPersonales';
import estadoCivil from './components/Funcionarios/EstadoCivil';
import datosfamiliares from './components/Funcionarios/DatosFamiliares';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
        <Switch>
           <Route exact path="/datospersonales" component={Datospersonales}/>
           <Route exact path="/estadocivil" component={estadoCivil}/>
           <Route exact path="/datosfamiliares" component={datosfamiliares}/>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
