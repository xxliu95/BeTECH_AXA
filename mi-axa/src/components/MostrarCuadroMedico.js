import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React, {Fragment, useState} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Table from 'react-bootstrap/Table';
import BuscarCuadroMedico from './BuscarCuadroMedico';


class MostrarCuadroMedico extends React.Component{

   constructor(props) {
       super(props);
   }


    render() {

        console.log("Este es el valor que hemos recibido: " + this.props.dataParentToChild)

        return (
            
            <Fragment>

                       
            
                <h1>Cuadro Médico</h1>
                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Cuadro Médico</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nombre PAS</td>
                            </tr>
                            <tr>
                                <td>Nombre Centros Medicos</td>
                            </tr>
                            <tr>
                                <td>Especialidades</td>
                            </tr>
                            <tr>
                                <td>Medicos asociados</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
                <Container>
                    <button type="submit" className="btn btn-primary">Especialidad</button>
                    <button type="submit" className="btn btn-primary">Centro Sanitario</button>
                    <button type="submit" className="btn btn-primary">Guardar y salir</button>
                </Container>

                
            </Fragment>
        );
    }

}

export default MostrarCuadroMedico;