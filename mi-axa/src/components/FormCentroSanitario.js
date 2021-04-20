
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



class FormFormSanitario extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            pasaosciado:'',
            cif: '',
            direccion: '',
            provincia: '',
            personacontacto: '',
            nombrecompleto:'',
            poblacion:'',
            codigopostal:'',
            email:''
        }
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
                                    <a>PAS asociado</a>
                                </Col>
                                <Col>
                                    <Form.Control
                                        as="select" defaultValue="Choose..."
                                        onChange={this.handleChange}
                                        name="pasaosciado">
                                        <option >PAS 1</option>
                                        <option>PAS 2</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a>CIF</a>
                                </Col>
                                <Col>
                                    <input type="cif"
                                           className="form-control"
                                           name="cif"
                                           onChange={this.handleChange} >
                                    </input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a>Dirección</a>
                                </Col>
                                <Col>
                                    <input type="text"
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
                                           className="form-control"
                                           onChange={this.handleChange}
                                           name="personacontacto"></input>
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
                                           className="form-control"
                                           onChange={this.handleChange}
                                           name="nombrecompleto"></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a>Población</a>
                                </Col>
                                <Col>
                                    <input type="text"
                                           className="form-control"
                                           onChange={this.handleChange}
                                           name="poblacion"></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a>Código postal</a>
                                </Col>
                                <Col>
                                    <input type="text"
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
                    <button type="submit" className="btn btn-primary">Guardar y Salir</button>
                </Container>

                <ul>
                    <li>{this.state.pasaosciado}</li>
                    <li>{this.state.cif}</li>
                    <li>{this.state.direccion}</li>
                    <li>{this.state.provincia}</li>
                    <li>{this.state.personacontacto}</li>
                    <li>{this.state.nombrecompleto}</li>
                    <li>{this.state.poblacion}</li>
                    <li>{this.state.codigopostal}</li>
                    <li>{this.state.email}</li>

                </ul>
            </Fragment>
        );
    }

}

export default FormFormSanitario;