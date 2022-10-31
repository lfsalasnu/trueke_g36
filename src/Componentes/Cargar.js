import React, {Component} from "react";
import datos from "./datos.json"
import Tarjeta from "./Tarjeta";
class Cargar extends Component{
    constructor(){
        super();
        this.state={datos};
        //console.log(this.state.datos);
    }
    render(){
        const datos= this.state.datos.map((dato)=>{return(
        <Tarjeta titulo={dato.titulo} descripcion={dato.descripcion} imagen={dato.imagen} prioridad={dato.prioridad} tiempo={dato.tiempo} responsable={dato.responsable}/>
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