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
        <Articulos nombre={dato.nombre} descripcion={dato.descripcion} imagen={dato.imagen} valor={dato.valor} cantidad={dato.cantidad} usuario={dato.usuario}/>
        );
    })
        //const datos= <Tarjeta titulo="prueba"/>
        return(
            <div className="row">
            {/* {datos} */}
            </div>
            );
    }
    
}

export default Cargar;