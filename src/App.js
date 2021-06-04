import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Navbar from './components/Navegacion';
import funcionarios from './components/Funcionarios';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
        <Switch>
           <Route exact path="/funcionarios" component={funcionarios}/>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
