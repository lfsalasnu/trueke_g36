import React,{Component} from "react";
import Tarjeta from "./Tarjeta";

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            titulo:'',
            descripcion:'',
            imagen:'',
            responsable:'',
            tiempo:0,
            prioridad:'baja'
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
            <div className="card w-50 m-auto mt-4">
                <h1 className="m-auto">  Nueva Tarjeta</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Titulo Tarjeta" name="titulo" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <textarea rows={3} className="form-control mt-3" type="text" placeholder="Descripción Tarjeta" name="descripcion" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control mt-3" type="text" placeholder="Imagen Tarjeta" name="imagen" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control mt-3" type="number" placeholder="Tiempo en minutos" name="tiempo" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control mt-3" type="text" placeholder="Responsable Tarjeta" name="responsable" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <h5 className="mt-3">Prioridad</h5>
                        <select className="form-control" name="prioridad" onChange={this.cambiar}>
                            <option>Alta</option>
                            <option>Media</option>
                            <option>Baja</option>
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