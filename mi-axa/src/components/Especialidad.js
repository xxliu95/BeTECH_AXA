import React from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Especialidad extends React.Component {
  render() {
    return (
      <Form>
      <h1>Especialidades por PAS </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>    <Form.Check type="checkbox" /></td>
            <td>1</td>
            <td>Medicina General</td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
      </Form>
    );
  }
}

export default Especialidad;