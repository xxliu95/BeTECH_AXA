import React from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Centro extends React.Component {
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
          <tr>
            <td>    <Form.Check type="checkbox" /></td>
            <td>Quirón</td>
            <td>Centro sanitario de Madrid</td>
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

export default Centro;