import { useState } from "react"
import Articulos from "./Articulos"

const DAO_articulos=()=>{

    const [todo,settodo]=useState([])

    const datos2=()=>{
        fetch('http://localhost:5000/articulos/todo')
            .then(res=>res.json())
            .then(todo2=>settodo(todo2))
    }

    datos2()
    const datos= todo.map((dato)=>{return(
    <Articulos nombre={dato.nombre} descripcion={dato.descripcion} imagen={dato.imagen} valor={dato.valor} cantidad={dato.cantidad} usuario={dato.usuario} id={dato._id}/>
    )})

    return(
        <div className="row">
            {datos}            
        </div>
    )
}

export default DAO_articulos