import React, { Component } from 'react'

export default class FamiliaresComponent extends Component {
    render() {
        return (
            <div className="container center">
                <div className="row pt-7 pb-3">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row pb-3">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Otros Datos Familiares</h5>
                                    </div>
                                </div>
                                <div className="row pt-7">
                                    <form id="frmOtrosDtPersonales">
                                        <div className="input-group frmdatospersonalestyle">
                                            <div className="col-sm-2">
                                                <h4 className="input-group-text">Familiar</h4>
                                                <span htmlFor="abueloPaterno" className="form-control">Abuelo Paterno</span>
                                                <span htmlFor="abuelaPaterna" className="form-control">Abuela Paterna</span>
                                                <span htmlFor="abueloMaterno" className="form-control">Abuelo Materno</span>
                                                <span htmlFor="abuelaMaterna" className="form-control">Abuela Materna</span>
                                                <span htmlFor="padre" className="form-control">Padre</span>
                                                <span htmlFor="madre" className="form-control">Madre</span>
                                                <span htmlFor="hermanos" className="form-control">Hermanos/as</span>
                                            </div>
                                            <div className="col-sm-10">
                                                <h4 className="input-group-text">Nombres y Apellidos</h4>
                                                <input type="text" className="form-control" name="abueloPaterno" id="abueloPaterno" />
                                                <input type="text" className="form-control" name="abuelaPaterna" id="abuelaPaterna" />
                                                <input type="text" className="form-control" name="abueloMaterno" id="abueloMaterno" />
                                                <input type="text" className="form-control" name="abuelaMaterna" id="abuelaMaterna" />
                                                <input type="text" className="form-control" name="padre" id="padre" />
                                                <input type="text" className="form-control" name="madre" id="madre" />
                                                <input type="text" className="form-control" name="hermanos" id="hermanos" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-7">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row pb-3">
                                    <div className="col-sm-11">
                                        <h5 className="card-title">Familiares Con Vínculo en la Función Pública</h5>
                                    </div>
                                    <div className="col-sm-1">
                                        <button className="btn btn-success" type="button" id="btnNuevo">Nuevo</button>
                                    </div>
                                </div>
                                <div className="row pt-7">
                                    <form id="frmFliaPublicos">
                                        <div className="input-group">
                                            <div className="row col-sm-4 mx-auto">
                                                <h4 className="input-group-text">Nombre y Apellidos</h4>
                                                <input type="text" name="nombreApellido" id="nombreApellido" className="form-control form-control-sm" />
                                            </div>
                                            <div className="row col-sm-4 mx-auto">
                                                <h4 className="input-group-text">Entidad y/o Institución</h4>
                                                <input type="text"  className="form-control form-control-sm" name="entidad" id="entidad" />
                                            </div>
                                            <div className="row col-sm-4 mx-auto">
                                                <h4 className="input-group-text">Cargo</h4>
                                                <input type="text"  className="form-control form-control-sm" name="cargo" id="cargo" />
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
