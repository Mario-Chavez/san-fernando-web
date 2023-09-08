import React from "react";
import {
    Container,
    Form,
    Nav,
    Navbar,
    Offcanvas,
    NavDropdown,
    Button,
} from "react-bootstrap";

const Header = () => {
    return (
        <>
            {["lg"].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">San Fernando de Leales</Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#inicio">Inicio</Nav.Link>
                                    <Nav.Link href="#historia">Nuestra Historia</Nav.Link>
                                    <Nav.Link href="#galeria">Galeria</Nav.Link>
                                    <Nav.Link href="#fechas">Fechas</Nav.Link>
                                    <NavDropdown
                                        title="El Equipo"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#arqueros">
                                            Arqueros
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#medioCampistas">
                                            Medio Campistas
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#delanteros">
                                            Delanteros
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="buscar"
                                        placeholder="Buscar"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Buscar</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
};

export default Header;
