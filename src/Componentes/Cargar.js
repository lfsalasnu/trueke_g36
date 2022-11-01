import React, {Component} from "react";
import datos from "./Datos.json"
import Articulos from "./Articulos";
class Cargar extends Component{
    constructor(){
        super();
        this.state={datos};
        //console.log(this.state.datos);
    }
    render(){
        const datos= this.state.datos.map((dato)=>{return(
        <Articulos titulo={dato.titulo} descripcion={dato.descripcion} imagen={dato.imagen} prioridad={dato.prioridad} tiempo={dato.tiempo} responsable={dato.responsable}/>
        );
    })
        //const datos= <Tarjeta titulo="prueba"/>
        return(
            <div className="row">
            {datos}
            </div>
            );
    }
    
}

export default Cargar;