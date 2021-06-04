import React, { Component } from 'react'

export default class FamiliaresComponent extends Component {
  render() {
    return (
      <div className="container center">
           <div className="row pt-7">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row pb-3">
                                    <div className="col-sm-11">
                                        <h5 className="card-title">Datos de los Hijos</h5>
                                    </div>
                                    <div className="col-sm-1">
                                        <button className="btn btn-success" type="button" id="btnNuevo">Nuevo</button>
                                    </div>
                                </div>
                                <div className="row pt-7">
                                    <form id="frmHijos">
                                        <div className="input-group frmhijosrowstyle">
                                            <div className="row col-sm-6 mx-auto">
                                                <h4 className="input-group-text">Apellidos y Nombres</h4>
                                                <input type="text" name="nroHijo" id="nroHijo" className="form-control form-control-sm" />
                                            </div>
                                            <div className="row col-sm-6 mx-auto">
                                                <h4 className="input-group-text">Fecha de Nacimiento</h4>
                                                <input type="date" className="form-control form-control-sm" name="fechaHijos" id="fechaHijos" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    )
  }
}
