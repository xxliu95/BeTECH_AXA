
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React, {Fragment, useState} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import GoogleMapReact from 'google-map-react';


import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

  const AnyReactComponent = ({ text }) => <div>{text}</div>;


class BuscarCentro extends React.Component{

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

   constructor(props) {
       super(props);
       this.state={
           provincia: '',
           especialidad: '',
           poblacion:'',
           codigopostal:'',
       }
   }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    sizes = [ "X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large" ];


    render() {
        return (
            <Fragment>
                <h1>Formulario</h1>
                <Container>
                    <form className="row" >
                        <Col>
                            <Row>
                            <Col>
                                <a>Población</a>
                                </Col>
                                <Col>
                                    <input type="text"
                                           placeholder="Nombre"
                                           className="form-control"
                                           onChange={this.handleChange}
                                           name="poblacion"></input>
                                </Col>
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
                                <a>Código postal</a>
                                </Col>
                                <Col>
                                    <input type="text"
                                           placeholder="Nombre"
                                           className="form-control"
                                           onChange={this.handleChange}
                                           name="codigopostal"></input>
                                </Col>

                                <Col>
                                    <a>Especialidad</a>
                                </Col>
                                <Col>
                                    <input type="text"
                                           placeholder="Nombre"
                                           className="form-control"
                                           onChange={this.handleChange}
                                           name="personacontacto"></input>
                                </Col>
                            </Row>
                            </Col>
                    </form>
                </Container>
                <Container>
                  <Row>

                  <div style={{ height: '100vh', width: '100%', padding:'10%' }}>
                    <GoogleMapReact
                      // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                      defaultCenter={this.props.center}
                      defaultZoom={this.props.zoom}
                    >
                      <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                      />
                    </GoogleMapReact>
                  </div>
                  </Row>
                </Container>
                <Container>
                <Link to="/"><button className="btn btn-primary">                
                        Volver</button></Link>
                </Container>

                <ul>
                    <li>{this.state.provincia}</li>
                    <li>{this.state.poblacion}</li>
                    <li>{this.state.codigopostal}</li>
                    <li>{this.state.especialidad}</li>

                </ul>
            </Fragment>
        );
    }

}

export default BuscarCentro;