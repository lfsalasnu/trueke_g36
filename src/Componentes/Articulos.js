import React, { Component } from "react";
//import img from "./imagen1.jpg"
class Articulos extends Component {

    constructor(){
        super();
        this.state={
            btn1:<div>
                    <a href="#" className="btn btn-primary me-3">Editar</a>
                    <a href="#" className="btn btn-danger">Eliminar</a>
                </div>,
            btn2:<a href="#" className="btn btn-success">Intercambiar</a>
        }
        //const btn_editar=<a href="#" className="btn btn-primary me-3">Editar</a>;
        //const btn_danger=<a href="#" className="btn btn-danger">Eliminar</a>;
    }    

    botones(usuario){
        let r;
        if (usuario==="Luis") {
            return this.state.btn1;         
        } else {
            return this.state.btn2;
        }
    }

    render() {
          
        
          
          //console.log(datos);
            

        
        return (
            <div className="col-sm-4 mt-4 text-center">
                <div className="card bg-dark border-white">
                    <img height="300" width="auto" src={process.env.PUBLIC_URL+this.props.imagen} className="card-img-top" alt={this.props.imagen}/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.nombre}</h5>
                            <p className="card-text">{this.props.descripcion}</p>
                            <span className="bg bg-danger rounded-pill">Valor: {this.props.valor}</span>
                            <br/>
                            <span className="bg bg-success rounded-pill">Usuario: {this.props.usuario}</span>
                            <br/>
                            <span className="bg bg-primary rounded-pill">Cantidad: {this.props.cantidad}</span>
                            <br/>
                            {this.botones(this.props.usuario)}
                            {/* <div>
                                {this.botones}
                            </div>
                             */}
                            
                        </div>
                </div>
            </div>
        );
    }
}

export default Articulos;