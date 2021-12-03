import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  BsFillPencilFill,
  BsTrashFill,
  BsFillFilePlusFill,
} from "react-icons/bs";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dui, setDui] = useState("");
  const [email, setEmail] = useState("");
  const [typeUser, setTypeUser] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const usersList = await fetchUsers();
      setUsers(usersList);
    };

    getUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:9090/api/users");
    const data = await res.json();

    return data;
  };

  const addUser = async (user) => {
    const res = await fetch("http://localhost:9090/api/saveUser", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    setUsers(...users, data);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !userName || !password || !dui || !email || !typeUser) {
      alert("Porfavor, llene todos los campos");
      return;
    }

    addUser({ name, dui, userName, password, email, typeUser });

    setName("");
    setUserName("");
    setPassword("");
    setDui("");
    setEmail("");
    setTypeUser("");
  };

  const handleModalShow = () => setAddModalShow(true);

  const handleModalClose = () => setAddModalShow(false);

  return (
    <Container>
      <Row>
        <Col sm={4} md={9}>
          <h1>Manejo de usuarios</h1>
        </Col>
        <Col sm={8} md={3}>
          <Button variant="success" onClick={() => handleModalShow()}>
            {" "}
            Agregar nuevo usuario <BsFillFilePlusFill />{" "}
          </Button>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <Table responsive striped hover size="sm" className="mt-5">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>User name</th>
                <th>Email</th>
                <th>User type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.typeUser}</td>
                    <td>
                      <Container>
                        <Row className="justify-content-center-md-center">
                          <Col md="auto">
                            <Button variant="warning">
                              {" "}
                              <BsFillPencilFill />{" "}
                            </Button>
                          </Col>
                          <Col md="auto">
                            <Button variant="danger">
                              <BsTrashFill />
                            </Button>
                          </Col>
                        </Row>
                      </Container>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={addModalShow} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agregar un usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="1° nombre y apellido"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridUserName">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre de usuario"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridDui">
                <Form.Label>DUI</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="N° de DUI"
                  value={dui}
                  onChange={(e) => setDui(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="formGridEmail" className="mg-4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Row className="my-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                  <option>yeet</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTypeUser">
                <Form.Label>Tipo de usuario</Form.Label>
                <Form.Select
                  defaultValue="Escoja..."
                  onChange={(e) => console.log("Value: ", e.target.value)}
                >
                  <option disabled>Escoja...</option>
                  <option>Admin</option>
                  <option>Organizacion</option>
                  <option>Particular</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cerrar
          </Button>
          <Button variant="primary" type="submit" onClick={handleModalClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Users;
