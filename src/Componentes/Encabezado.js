import React,{Component} from "react";

class Encabezado extends Component{
    render(){
        return(
            <div>
                <img height="150" width="auto" className="mx-auto d-block" src={process.env.PUBLIC_URL+"./Recursos/logo3.png"}/>
            </div>
        );
    }
}

export default Encabezado;