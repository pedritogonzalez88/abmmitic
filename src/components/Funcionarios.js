import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        return (
            <div className="container center">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="card styleCon">
                            <div className="card-body">
                                <h5 className="card-title">Datos Personales</h5>
                                <form id="frmDPersonales">
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <label htmlfor="nombres">Nombres</label>
                                            <input type="text" id="nombres" name="nombres" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label htmlfor="apellidos">Apellidos</label>
                                            <input type="text" id="apellidos" name="apellidos" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <label htmlfor="sexo">Sexo</label>
                                            <select className="form-select" aria-label="sexo">
                                                <option selected>Elija un Sexo</option>
                                                <option value="F">Femenino</option>
                                                <option value="M">Masculino</option>
                                                <option value="O">Otros</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label htmlfor="fecNacimiento">Fecha de Nacimiento</label>
                                            <input type="date" id="fecNacimiento" name="fecNacimiento" className="form-control form-control-sm" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <label htmlfor="paisnacimiento">Pais de Nacimiento</label>
                                            <input type="text" id="paisnacimiento" name="paisnacimiento" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label htmlfor="ciudadNacimiento">Ciudad de Nacimiento</label>
                                            <input type="text" id="ciudadNacimiento" name="ciudadNacimiento" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-sm-3">
                                            <label htmlfor="ci">Cedula de Identidad</label>
                                            <input type="number" id="ci" name="ci" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                        <div className="form-group col-sm-2">
                                            <label htmlfor="pasaporte">Pasaporte</label>
                                            <input type="text" id="pasaporte" name="pasaporte" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                        <div className="form-group col-sm-3">
                                            <label htmlfor="registroConduccion">Registro de Conduccion</label>
                                            <input type="text" id="registroConduccion" name="registroConduccion" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                        <div className="form-group col-sm-2">
                                            <label htmlfor="categoriaRegistro">Categoria</label>
                                            <input type="text" id="categoriaRegistro" name="categoriaRegistro" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                        <div className="form-group col-sm-2">
                                            <label htmlfor="ruc">Ruc</label>
                                            <input type="text" id="ruc" name="ruc" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-sm-4">
                                            <label htmlfor="callePrincipal">Domicilio - Calle Principal</label>
                                            <input type="text" id="callePrincipal" name="callePrincipal" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                        <div className="form-group col-sm-1">
                                            <label htmlfor="nroCasa">Numero</label>
                                            <input type="number" id="nroCasa" name="nroCasa" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <label htmlfor="calleSecundaria">Domicilio - Calle Secundaria</label>
                                            <input type="text" id="calleSecundaria" name="calleSecundaria" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                        <div className="form-group col-sm-2">
                                            <label htmlfor="edificio">Edificio</label>
                                            <input type="text" id="edificio" name="edificio" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                        <div className="form-group col-sm-1">
                                            <label htmlfor="piso">Piso</label>
                                            <input type="number" id="piso" name="piso" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-sm-2">
                                            <label htmlfor="barrio">Barrio</label>
                                            <input type="text" id="barrio" name="barrio" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                        <div className="form-group col-sm-3">
                                            <label htmlfor="ciudad">Ciudad</label>
                                            <input type="text" id="ciudad" name="ciudad" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                        <div className="form-group col-sm-3">
                                            <label htmlfor="departamento">Departamento</label>
                                            <input type="text" id="departamento" name="departamento" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <label htmlfor="email">Correo Electronico</label>
                                            <input type="email" id="email" name="email" className="form-control form-control-sm" autoComplete="off" required />
                                        </div>
                                    </div>
                                    <div className="row g-3">
                                        <div className="form-group col-sm-6">
                                            <div className="col-sm">
                                                <label htmlfor="linaBaja">Linea Baja</label>
                                                <input type="number" id="lineaBaja" name="lineaBaja" className="form-control form-control-sm" />
                                            </div>
                                            <div className="col-sm">
                                                <label htmlfor="movil">Celular</label>
                                                <input type="number" id="movil" name="movil" className="form-control form-control-sm" />
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-3">
                                            <label htmlfor="situanLaboral">Situacion Laboral</label>
                                            <select className="form-select" aria-label="situacionLaboral">
                                                <option selected>Elija una Opcion</option>
                                                <option value="P">Permanente</option>
                                                <option value="C">Contratados</option>
                                                <option value="CM">Comisionados</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-sm-3">
                                            <label htmlfor="sexo">Sexo</label>
                                            <select className="form-select" aria-label="sexo">
                                                <option selected>Elija un Sexo</option>
                                                <option value="F">Femenino</option>
                                                <option value="M">Masculino</option>
                                                <option value="O">Otros</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
