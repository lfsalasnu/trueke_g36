import React, { Component } from "react";
//import img from "./imagen1.jpg"
import axios from "axios";
class Articulos extends Component {

    constructor() {
        super();
        this.state = {
            nombre: '',
            descripcion: '',
            imagen: '',
            usuario: '',
            cantidad: 0,
            valor: 'bajo',
            id:''
        }
        //const btn_editar=<a href="#" className="btn btn-primary me-3">Editar</a>;
        //const btn_danger=<a href="#" className="btn btn-danger">Eliminar</a>;
        this.cambiar = this.cambiar.bind(this)
        this.guardar = this.guardar.bind(this)
        this.eliminar = this.eliminar.bind(this)
    }

    guardar(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        //console.log(this.state)
        axios.post("http://localhost:5000/articulos/actualizar2",this.state)
    }
    cambiar(e) {
        //console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }

    eliminar(e) {
        let direccion = "http://localhost:5000/articulos/eliminar/" + e.target.name
        axios.get(direccion)
        console.log(direccion)
        alert("Eliminando")
    }

    render() {



        //console.log(datos);



        return (
            <div className="col-sm-4 mt-4 text-center">
                <div className="card bg-dark border-white">
                    <img height="300" width="auto" src={process.env.PUBLIC_URL + this.props.imagen} className="card-img-top" alt={this.props.imagen} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.nombre}</h5>
                        <p className="card-text">{this.props.descripcion}</p>
                        <span className="bg bg-danger rounded-pill">Valor: {this.props.valor}</span>
                        <br />
                        <span className="bg bg-success rounded-pill">Usuario: {this.props.usuario}</span>
                        <br />
                        <span className="bg bg-primary rounded-pill">Cantidad: {this.props.cantidad}</span>
                        <br />

                        <button className="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target={"#editar" + this.props.id}>Editar</button>
                        <button className="btn btn-danger me-3" data-bs-toggle="modal" data-bs-target={"#articulo" + this.props.id}>Eliminar</button>
                        <button className="btn btn-success">Intercambiar</button>

                        {/* eliminar */}
                        <div className="modal fade" id={"articulo" + this.props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Eliminar</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body text-dark">
                                        Desea eliminar el articulo {this.props.id}?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="button" className="btn btn-danger" onClick={this.eliminar} name={this.props.id}>Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Editar */}
                        <div className="modal fade" id={"editar" + this.props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog bg-dark">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Editar</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label for="recipient-name" className="col-form-label text-dark" >Articulo</label>
                                                <input type="text" className="form-control" id="recipient-name" name="nombre" onChange={this.cambiar} defaultValue={this.props.nombre} />
                                            </div>
                                            <div className="mb-3">
                                                <label for="message-text" className="col-form-label text-dark" >descripcion</label>
                                                <textarea className="form-control" id="message-text" name="descripcion" onChange={this.cambiar} defaultValue={this.props.descripcion}></textarea>
                                            </div>
                                            {/* <div className="mb-3">
                                                <label for="recipient-name" className="col-form-label text-dark" >id</label>
                                                <input type="text" className="form-control" id="recipient-name" name="id" onChange={this.cambiar} defaultValue={this.props.id} />
                                            </div> */}
                                            <div className="mb-3">
                                                <label for="recipient-name" className="col-form-label text-dark" >cantidad</label>
                                                <input type="text" className="form-control" id="recipient-name" name="cantidad" onChange={this.cambiar} defaultValue={this.props.cantidad} />
                                            </div>
                                            <div className="mb-3">
                                                <label for="recipient-name" className="col-form-label text-dark" >Imagen</label>
                                                <input type="text" className="form-control" id="recipient-name" name="imagen" onChange={this.cambiar} defaultValue={this.props.imagen} />
                                            </div>
                                            <div className="mb-3">
                                                <label for="recipient-name" className="col-form-label text-dark" >Usuario</label>
                                                <input type="text" className="form-control" id="recipient-name" name="usuario" onChange={this.cambiar} defaultValue={this.props.usuario} />
                                            </div>

                                            <div className="mb-1">
                                            <label for="recipient-name" className="col-form-label text-dark" >Valor</label>
                                                <select className="form-control" name="valor" onChange={this.cambiar}>
                                                    <option>Alto</option>
                                                    <option>Medio</option>
                                                    <option>Bajo</option>
                                                </select>
                                            </div>

                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="button" className="btn btn-primary" name="id" onClick={this.guardar} value={this.props.id}>Guardar</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default Articulos;