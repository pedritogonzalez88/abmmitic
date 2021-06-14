import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom'

export default class Navegacion extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand navbar-light lightnav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Mitic</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navstyle" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to="/datospersonales">Datos Personales</NavLink>
              <NavLink className="nav-link" to="/estadoCivil">Estado Civil</NavLink>
              <NavLink className="nav-link" to="/datosfamiliares">Datos Familiares</NavLink>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
