import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom'

export default class componentName extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light lightnav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Mitic</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navstyle" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to="/funcionarios">Funcionarios</NavLink>
              {/* <NavLink className="nav-link" to="#">Features</NavLink>
              <NavLink className="nav-link" to="#">Pricing</NavLink>
              <NavLink className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
