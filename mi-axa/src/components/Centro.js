import React from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Centro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {providers: [], id:0}
  }
  componentDidMount() {
    axios.get("http://localhost:8081/providers/")
    .then((res) => {
      console.log(res.data)
      this.setState({
        providers:res.data
      })
    })
  }

  delete(id) {
    axios.delete("http://localhost:8081/providers/"+id)
    .then(() => {
      this.componentDidMount();
    })
  }
  render() {
    return (
      <Form>
      <h1>Centro Sanitario </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>PAS</th>
            <th>Centro Sanitario</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.providers.map(provider => 
              <tr>
              <td>{provider.nombre}</td>
              <td>{provider.id_tipo_proveedor} de {provider.provincia}</td>
              <td> <button onClick={(e) => this.delete(provider.id)}>Borrar</button></td>
            </tr>
            )
          }
        </tbody>
      </Table>
      </Form>
    );
  }
}

export default Centro;