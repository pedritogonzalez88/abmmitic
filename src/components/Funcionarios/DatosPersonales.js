import React, { Component } from 'react'


export default class DatosPersonales extends Component {
    constructor (props) {
        super(props);
        this.state = {

            nombres: '',
            apellidos: '',
            fecNacimiento: '',

        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className="container center">
                <div className="row pb-3">
                    <div className="col-sm-12">
                        <div className="card styleCon">
                            <div className="card-body">
                                <h5 className="card-title">Datos Personales</h5>
                                <form id="frmDPersonales" onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <label for="nombres">Nombres</label>
                                            <input type="text" id="nombres" name="nombres" className="form-control form-control-sm" autoComplete="off" 
                                            required onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label for="apellidos">Apellidos</label>
                                            <input type="text" id="apellidos" name="apellidos" className="form-control form-control-sm" 
                                            autoComplete="off" required onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <label for="sexo">Sexo</label>
                                            <select className="form-select" aria-label="sexo" onChange={this.handleChange}>
                                                <option selected>Elija un Sexo</option>
                                                <option name="F">Femenino</option>
                                                <option name="M">Masculino</option>
                                                <option name="O">Otros</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label for="fecNacimiento">Fecha de Nacimiento</label>
                                            <input type="date" id="fecNacimiento" name="fecNacimiento" className="form-control form-control-sm" 
                                            onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <label for="paisnacimiento">Pais de Nacimiento</label>
                                            <input type="text" id="paisnacimiento" name="paisnacimiento" className="form-control form-control-sm" 
                                            autoComplete="off" required onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label for="ciudadNacimiento">Ciudad de Nacimiento</label>
                                            <input type="text" id="ciudadNacimiento" name="ciudadNacimiento" className="form-control form-control-sm" 
                                            autoComplete="off" required onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-sm-3">
                                            <label for="ci">Cedula de Identidad</label>
                                            <input type="text" id="ci" name="ci" className="form-control form-control-sm" 
                                            autoComplete="off" required onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group col-sm-2">
                                            <label for="pasaporte">Pasaporte</label>
                                            <input type="text" id="pasaporte" name="pasaporte" className="form-control form-control-sm" 
                                            autoComplete="off" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group col-sm-3">
                                            <label for="registroConduccion">Registro de Conduccion</label>
                                            <input type="text" id="registroConduccion" name="registroConduccion" className="form-control form-control-sm" 
                                            autoComplete="off" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-sm-2">
                                            <label for="categoriaRegistro">Categoria</label>
                                            <input type="text" id="categoriaRegistro" name="categoriaRegistro" className="form-control form-control-sm" 
                                            autoComplete="off" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-sm-2">
                                            <label for="ruc">Ruc</label>
                                            <input type="text" id="ruc" name="ruc" className="form-control form-control-sm" 
                                            autoComplete="off" required onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-sm-4">
                                            <label for="callePrincipal">Domicilio - Calle Principal</label>
                                            <input type="text" id="callePrincipal" name="callePrincipal" className="form-control form-control-sm" 
                                            autoComplete="off" required onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-sm-1">
                                            <label for="nroCasa">Numero</label>
                                            <input type="text" id="nroCasa" name="nroCasa" className="form-control form-control-sm" 
                                            autoComplete="off" required onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <label for="calleSecundaria">Domicilio - Calle Secundaria</label>
                                            <input type="text" id="calleSecundaria" name="calleSecundaria" className="form-control form-control-sm" 
                                            autoComplete="off" required onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-sm-2">
                                            <label for="edificio">Edificio</label>
                                            <input type="text" id="edificio" name="edificio" className="form-control form-control-sm" 
                                            autoComplete="off" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-sm-1">
                                            <label for="piso">Piso</label>
                                            <input type="text" id="piso" name="piso" className="form-control form-control-sm" 
                                            autoComplete="off" onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-sm-2">
                                            <label for="barrio">Barrio</label>
                                            <input type="text" id="barrio" name="barrio" className="form-control form-control-sm" 
                                            autoComplete="off" required onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-sm-3">
                                            <label for="ciudad">Ciudad</label>
                                            <input type="text" id="ciudad" name="ciudad" className="form-control form-control-sm" 
                                            autoComplete="off" required onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-sm-3">
                                            <label for="departamento">Departamento</label>
                                            <input type="text" id="departamento" name="departamento" className="form-control form-control-sm" 
                                            autoComplete="off" required onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <label for="email">Correo Electronico</label>
                                            <input type="email" id="email" name="email" className="form-control form-control-sm" 
                                            autoComplete="off" required onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="form-group col-sm-3">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" for="vive">Vive en Casa</span>
                                                <select className="form-select" aria-label="vive" onChange={this.handleChange}>
                                                    <option selected value="P">Propia</option>
                                                    <option value="R">Rentada</option>
                                                    <option value="D">Padres</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-3">
                                            <div className="input-group mb-2">
                                                <span className="input-group-text" for="situacionLaboral">Situacion Laboral</span>
                                                <select className="form-select" aria-label="situacionLaboral" onChange={this.handleChange}>
                                                    <option selected value="P">Permanente</option>
                                                    <option value="C">Contratados</option>
                                                    <option value="CM">Comisionados</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-3">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" for="linea Baja">Linea Baja</span>
                                                <input type="text" id="lineaBaja" name="lineaBaja" className="form-control form-control-sm" 
                                                onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-3">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" for="movil">Celular</span>
                                                <input type="text" id="movil" name="movil" className="form-control form-control-sm" 
                                                onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pb-3">
                                        <div className="form-floating">
                                            <textarea className="form-control styletext" name="txtobservacion" id="txtObservaciones" 
                                            rows="40" onChange={this.handleChange}></textarea>
                                            <label for="observaciones" className="form-label">Observaciones:</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <button className="btn btn-success" type="submit">Guardar</button>
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
