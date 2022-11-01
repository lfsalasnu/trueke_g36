import React, { Component } from "react";

class Inicio_sesion extends Component {

    render() {
        return (
            <div className="text-center">
                <main className="form-signin w-50 m-auto card bg-dark border-white mt-4 mb-4 p-4">
                    <form>
                        <img className="mb-4 mx-auto" src={process.env.PUBLIC_URL+"./Recursos/logo_trueke.png"} alt="" width="100" height="auto"/>
                            <h1 className="h3 mb-3 fw-normal mx-auto">Iniciar Sesión</h1>

                            <div className="form-floating text-dark">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Correo</label>
                            </div>
                            <div className="form-floating text-dark">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label for="floatingPassword">Contraseña</label>
                            </div>

                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me"/> Recuerdame
                                </label>
                            </div>
                            <button className="w-50 btn btn-lg btn-primary" type="submit">Ingresar</button>
                            <p className="mt-5 mb-3 text-muted"> Trueke &copy; 2022</p>
                    </form>
                </main>
            </div>
        );
    }
}
export default Inicio_sesion;