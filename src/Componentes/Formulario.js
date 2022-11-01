import React,{Component} from "react";
import Tarjeta from "./Articulos";

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            articulo:'',
            descripcion:'',
            imagen:'',
            usuario:'',
            cantidad:0,
            valor:'bajo'
        }
        this.cambiar=this.cambiar.bind(this);
        this.guardar=this.guardar.bind(this);
    }

    cambiar(e){
        //console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]:e.target.value
        })
        //console.log(this.state);
    }

    guardar(e){
        e.preventDefault();
        console.log(this.state);
        return(<Tarjeta/>);
    }

    render(){
        return(
            <div className="card w-50 m-auto mt-4 bg-dark border-white">
                <h1 className="m-auto">  Nuevo Articulo</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Nombre Articulo" name="nombre" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <textarea rows={3} className="form-control mt-3" type="text" placeholder="Descripción Articulo" name="descripcion" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control mt-3" type="text" placeholder="Imagen" name="imagen" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control mt-3" type="number" placeholder="Cantidad" name="cantidad" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control mt-3" type="text" placeholder="usuario" name="usuario" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <h5 className="mt-3">Valor</h5>
                        <select className="form-control" name="valor" onChange={this.cambiar}>
                            <option>Alto</option>
                            <option>Medio</option>
                            <option>Bajo</option>
                        </select>
                    </div>
                    <div className="form-group mt-3">
                        <button className="btn btn-primary mx-auto d-grid gap-2 col-4" type="button" onClick={this.guardar}>Guardar</button>
                    </div>

                </form>

            </div>
        );
    }
}

export default Formulario