
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React, {Fragment, useState} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";



const FormPAS = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <Container>
            <form className="row" onSubmit={enviarDatos}>
                <Col>
                    <Row>
                        <Col>
                            <a>CIF</a>
                        </Col>
                        <Col>
                            <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a>Dirección</a>
                        </Col>
                        <Col>
                            <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a>Provincia</a>
                        </Col>
                        <Col>
                            <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a>Persona de contacto</a>
                        </Col>
                        <Col>
                            <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a>Tipo de proveedor</a>
                        </Col>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu onChange={handleInputChange}>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <a>Nombre Completo</a>
                        </Col>
                        <Col>
                            <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a>Población</a>
                        </Col>
                        <Col>
                            <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a>Código postal</a>
                        </Col>
                        <Col>
                            <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a>Email</a>
                        </Col>
                        <Col>
                            <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                        </Col>
                    </Row>
                </Col>


            </form>
                </Container>
            <Container>
                <button type="submit" className="btn btn-primary">Especialidad</button>
                <button type="submit" className="btn btn-primary">Guardar y Salir</button>
            </Container>

            <ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
            </ul>
        </Fragment>
    );
}

export default FormPAS;