import React,{Component} from "react";
import Tarjeta from "./Articulos";

class Nuevo_usuario extends Component{
    constructor(){
        super();
        this.state={
            nombre:'',
            apellido:'',
            correo:'',
            clave:'',
            claver:'',
            edad:0,
            ciudad:''
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
                <h1 className="m-auto">Crear Usuario</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Nombres" name="nombre" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control mt-3" type="text" placeholder="Apellidos" name="apellido" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control mt-3" type="number" placeholder="Edad" name="edad" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control mt-3" type="email" placeholder="Correo" name="correo" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control mt-3" type="password" placeholder="Contraseña" name="clave" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control mt-3" type="password" placeholder="Repetir Contraseña" name="claver" onChange={this.cambiar}/>
                    </div>
                    <div className="form-group">
                        <h5 className="mt-3">Ciudad</h5>
                        <select className="form-control" name="ciudad" onChange={this.cambiar}>
                            <option>Bogotá</option>
                            <option>Medellín</option>
                            <option>Barranquilla</option>
                            <option>Pereira</option>
                        </select>
                    </div>
                    <div className="form-group mt-3">
                        <button className="btn btn-primary mx-auto d-grid gap-2 col-4" type="button" onClick={this.guardar}>Crear usuario</button>
                    </div>

                </form>

            </div>
        );
    }
}

export default Nuevo_usuario;