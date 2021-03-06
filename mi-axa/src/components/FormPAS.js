
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React, {Fragment, useState} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import axios from 'axios';

class FormPAS extends React.Component{

   constructor(props) {
       super(props);
       this.state={
           cif: '',
           direccion: '',
           provincia: '',
           personacontacto: '',
           tipoproveedor: '',
           nombrecompleto:'',
           poblacion:'',
           codigopostal:'',
           email:''
       }
   }

   submit(event) {
     event.preventDefault();
     axios.post("http://localhost:8081/providers/", {
         cif:this.state.cif,
         direccion:this.state.direccion,
         provincia:this.state.provincia,
         persona_contacto:this.state.personacontacto,
         id_tipo_proveedor:this.state.tipoproveedor,
         nombre:this.state.nombrecompleto,
         poblacion:this.state.poblacion,
         codigo_postal:this.state.codigopostal,
         contacto:this.state.email
     })
   }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    render() {
        return (
            <Fragment>
                <h1>Formulario</h1>
                <Container>
                    <form className="row" >
                        <Col>
                            <Row>
                                <Col>
                                    <a>CIF</a>
                                </Col>
                                <Col>
                                    <input type="cif"
                                           placeholder="Nombre"
                                           className="form-control"
                                           name="cif"
                                           onChange={this.handleChange} >
                                    </input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a>Direcci??n</a>
                                </Col>
                                <Col>
                                    <input type="text"
                                           placeholder="Nombre"
                                           className="form-control"
                                           onChange={this.handleChange}
                                           name="direccion"></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a>Provincia</a>
                                </Col>
                                <Col>
                                    <input type="text"
                                           placeholder="Nombre"
                                           className="form-control"
                                           onChange={this.handleChange}
                                           name="provincia"></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a>Persona de contacto</a>
                                </Col>
                                <Col>
                                    <input type="text"
                                           placeholder="Nombre"
                                           className="form-control"
                                           onChange={this.handleChange}
                                           name="personacontacto"></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a>Tipo de proveedor</a>
                                </Col>
                                <Col>
                                    <Form.Control
                                        as="select" defaultValue="Choose..."
                                        onChange={this.handleChange}
                                        name="tipoproveedor">
                                        <option >Proveedor 1</option>
                                        <option>Proveedor 2</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <a>Nombre Completo</a>
                                </Col>
                                <Col>
                                    <input type="text"
                                           placeholder="Nombre"
                                           className="form-control"
                                           onChange={this.handleChange}
                                           name="nombrecompleto"></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a>Poblaci??n</a>
                                </Col>
                                <Col>
                                    <input type="text"
                                           placeholder="Nombre"
                                           className="form-control"
                                           onChange={this.handleChange}
                                           name="poblacion"></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a>C??digo postal</a>
                                </Col>
                                <Col>
                                    <input type="text"
                                           placeholder="Nombre"
                                           className="form-control"
                                           onChange={this.handleChange}
                                           name="codigopostal"></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a>Email</a>
                                </Col>
                                <Col>
                                    <input type="text"
                                           placeholder="Nombre"
                                           className="form-control"
                                           onChange={this.handleChange}
                                           name="email"></input>
                                </Col>
                            </Row>
                        </Col>


                    </form>
                </Container>
                <Container>
                <Link to="/Especialidad/"><button className="btn btn-primary">                
                        Especialidad</button></Link>
                <button type="submit" onClick={(e) => this.submit(e)} className="btn btn-primary">Guardar</button>
                </Container>

                <ul>
                    <li>{this.state.cif}</li>
                    <li>{this.state.direccion}</li>
                    <li>{this.state.provincia}</li>
                    <li>{this.state.personacontacto}</li>
                    <li>{this.state.tipoproveedor}</li>
                    <li>{this.state.nombrecompleto}</li>
                    <li>{this.state.poblacion}</li>
                    <li>{this.state.codigopostal}</li>
                    <li>{this.state.email}</li>

                </ul>
            </Fragment>
        );
    }

}

export default FormPAS;