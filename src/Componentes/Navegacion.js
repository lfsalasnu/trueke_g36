import React, { Component } from "react";
import App from "../App";
class Navegacion extends Component {

    render() {
        return (
            <div>
                <div className="nav">
                    <ul className="nav nav-tabs nav-pills" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active text-white" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{this.props.enlace1}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-white" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">{this.props.enlace2}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-white" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">{this.props.enlace3}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-white" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">{this.props.enlace4}</button>
                        </li>
                    </ul>

                    <form className="d-flex justify-content-end" role="search">
                        <input className="form-control me-2 justify-content-end" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button className="d-flex btn btn-outline-primary justify-content-end" type="submit">Buscar</button>
                    </form>
                </div>

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active text-white" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <App />
                    </div>
                    <div className="tab-pane fade text-white" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">Enlace 2</div>
                    <div className="tab-pane fade text-white" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">Enlace 3</div>
                    <div className="tab-pane fade text-white" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">Enlace 4</div>
                </div>
            </div>
        );
    }
}

export default Navegacion;