import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React, {Fragment, useState} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Table from 'react-bootstrap/Table';
import MostrarCuadroMedico from './MostrarCuadroMedico';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/*const schema = {
    type: 'object',
    required: ['file'],
    properties: {
        file: { type: 'string', format: 'data-url', title: 'File' }
    }
}

const FileWidget = (props) => {
    return (
        <input type="file" id="fileName" required={props.required} onChange={(event) =>  props.onChange(event.target.value)} />
    )
}

const uiSchema = {
    file: {
        'ui:widget': FileWidget,
        classNames: "uiSchema"
    }
}*/



class BuscarCuadroMedico extends React.Component {

    constructor(props) {
      super(props);
      this.state = {nombreCuadro: ''}
      /*this.handleChange = this.handleChange.bind(this);
      this.getFileSize = this.getFileSize.bind(this);*/
      
  }

  /*getFileSize(){
    this.setState({fileSize: document.getElementById("nombreCuadro").files[0].size});
    console.log("FILESIZE:: ", this.state.fileSize);
 } */

  
   handleChange = (e) => {
    
        this.setState({nombreCuadro: e.target.value});

       console.log("hola")
       console.log("Esto es lo que quiero pasar: " + this.state.nombreCuadro)
   }

   /*<div className="container">
                        <MostrarCuadroMedico schema={schema} uiSchema={uiSchema} fileSize={this.state.fileSize} />
                </div>*/
  
    render() {

        <MostrarCuadroMedico dataParentToChild = {this.state.nombreCuadro} />

      return (

          
        <Form>
        
        <h1>Búsqueda de cuadro médico</h1>
  
        <Fragment>

                
                <Container>
                    <form className="row" >
                        <Col>
                            <Row>
                                <Col>
                                    <a>Nombre Cuadro</a>
                                </Col>
                                <Col>
                                    <input type="nombreCuadro"
                                            className="form-control"
                                            name="nombreCuadro"
                                            
                                            onChange={this.handleChange}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </form>
                </Container>
  
                  <ul>
                      <li>{this.state.nombreCuadro}</li>
                  </ul>
        </Fragment>
                
              <Link to="/MostrarCuadroMedico/"><Button variant="primary" className="text-center">
                Buscar
              </Button>{' '}</Link>

              
        </Form>
        
            
      );
    }
}

export default BuscarCuadroMedico;