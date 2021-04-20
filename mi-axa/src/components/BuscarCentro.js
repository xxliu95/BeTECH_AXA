
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React, {Fragment, useRef, useState} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import GoogleMapReact from 'google-map-react';
import {MapContainer, TileLayer, Marker, Popup, useMapEvent} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
function SetViewOnClick({ animateRef }) {
    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: animateRef.current || false,
        })
    })

    return null
}

const position = [51.505, -0.09]
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
           lat: 13.084622,
           lng: 80.248357,
           zoom: 9
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




                    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>







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