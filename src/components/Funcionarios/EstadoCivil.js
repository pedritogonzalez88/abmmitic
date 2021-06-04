import React, { Component } from 'react';

export default class EstadoCivilComponent extends Component {
    render() {
        return (
            <div className="container center">
                <div className="row pb-3">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Estado Civil</h5>
                                <form id="frmEstadoCivil">
                                    <div className="form-group col-sm-10 ms-5 center">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="soltero" value="soltero" />
                                            <label htmlfor="soltero" className="form-check-label">Soltero/a</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="concubino" value="concubino" />
                                            <label htmlfor="concubino" className="form-check-label">Concubino/a</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="casado" value="casado" />
                                            <label htmlfor="casado" className="form-check-label">Casado/a</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="divorciado" value="divorciado" />
                                            <label htmlfor="divorciado" className="form-check-label">Divorciado/a</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="viudo" value="viudo" />
                                            <label htmlfor="viudo" className="form-check-label">Viudo/a</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-7 pb-3">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Datos del Cónyuge / Concubino</h5>
                                <form id="frmConubino">
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <label htmlfor="nombreConcubino">Nombres</label>
                                            <input type="text" id="nombreConcubino" name="nombreConcubino" className="form-control form-control-sm" />
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label htmlfor="apellidoConcubino">Apellidos</label>
                                            <input type="text" id="apellidoConcubino" name="apellidoConcubino" className="form-control form-control-sm" />
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="form-group col-sm-3">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" htmlfor="sexoConcubino">Sexo</span>
                                                <select className="form-select" aria-label="sexoConcubino">
                                                    <option selected value="M">Masculino</option>
                                                    <option value="F">Femenino</option>
                                                    <option value="o">Otros</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-3">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" htmlfor="nroDocumento">Nro de Documento</span>
                                                <input type="text" className="form-control form-control-sm" name="ciConcubino" id="ciConcubino" />
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-3">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" htmlfor="linea Baja">Linea Baja</span>
                                                <input type="text" id="lineaBaja" name="lineaBaja" className="form-control form-control-sm" />
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-3">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" htmlfor="movil">Celular</span>
                                                <input type="text" id="movil" name="movil" className="form-control form-control-sm" />
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
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
