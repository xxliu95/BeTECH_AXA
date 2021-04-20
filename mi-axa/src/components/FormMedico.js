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



class FormMedico extends React.Component{

   constructor(props) {
       super(props);
       this.state={
           nombre: '',
           apellidos: '',
           nColegiado: '',
           telefono: '',
       }
   }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    


    render() {
        return (
            <Fragment>
                <h1>Dar de alta médico</h1>
                <Container>
                    <form className="row" >
                        <Col>
                            <Row>
                                <Col>
                                    <a>Nombre</a>
                                </Col>
                                <Col>
                                    <input type="nombre"
                                           className="form-control"
                                           name="nombre"
                                           onChange={this.handleChange} >
                                    </input>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col>
                                    <a>Nº Colegiado</a>
                                </Col>
                                <Col>
                                    <input type="nColegiado"
                                           className="form-control"
                                           onChange={this.handleChange}
                                           name="nColegiado">
                                    </input>
                                </Col>
                            </Row>
                            
                            
                        </Col>
                        <Col>
                            <Row>
                                    <Col>
                                        <a>Apellidos</a>
                                    </Col>
                                    <Col>
                                        <input type="apellidos"
                                            className="form-control"
                                            onChange={this.handleChange}
                                            name="apellidos">
                                        </input>
                                    </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a>Telefono</a>
                                </Col>
                                <Col>
                                    <input type="telefono"
                                           className="form-control"
                                           onChange={this.handleChange}
                                           name="telefono">
                                    </input>
                                </Col>
                            </Row>
                            
                        </Col>


                    </form>
                </Container>
                <Container>
                    <Link to="/Especialidad/"><button className="btn btn-primary">                
                        Especialidad</button></Link>
                    <Link to="/Centro/"><button className="btn btn-primary">                
                        Centro Sanitario</button></Link>                    
                    <button type="submit" className="btn btn-primary">Guardar y salir</button>
                </Container>

                <ul>
                    <li>{this.state.nombre}</li>
                    <li>{this.state.apellidos}</li>
                    <li>{this.state.nColegiado}</li>
                    <li>{this.state.telefono}</li>

                </ul>
            </Fragment>
        );
    }

}

export default FormMedico;