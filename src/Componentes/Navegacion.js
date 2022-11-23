import React, { Component } from "react";
import Cargar from "./Cargar";
import DAO_articulos from "./DAO_articulos";
//import App from "../App";
import Formulario from "./Formulario";
import Inicio_sesion from "./Inicio_sesion";
import Nuevo_usuario from "./Nuevo_usuario";
class Navegacion extends Component {

    render() {
        return (
            <div>
                <div className="nav">
                    <ul className="nav nav-tabs nav-pills" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active text-white" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{this.props.enlace1}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-white" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{this.props.enlace2}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-white" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">{this.props.enlace3}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-white" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">{this.props.enlace4}</button>
                        </li>
                    </ul>

                    <form className="d-flex justify-content-end" role="search">
                        <input className="form-control me-2 justify-content-end ms-5" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button className="d-flex btn btn-outline-primary justify-content-end" type="submit">Buscar</button>
                    </form>
                    <div className="ms-5 btn btn-outline-primary">
                        Usuario: Luis
                    </div>
                </div>

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active text-white" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <Cargar/>
                        <DAO_articulos/>
                    </div>
                    <div className="tab-pane fade text-white" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <Formulario/>
                    </div>
                    <div className="tab-pane fade text-white" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <Inicio_sesion/>
                    </div>
                    <div className="tab-pane fade text-white" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                        <Nuevo_usuario/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navegacion;