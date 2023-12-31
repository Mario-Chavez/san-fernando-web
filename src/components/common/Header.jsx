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
import escudo from "../../assets/sanFer-escudo.png";
import black from "../../assets/escudo-svg.png";

const Header = () => {
    return (
        <>
            {["lg"].map((expand) => (
                <Navbar
                    key={expand}
                    bg="dark"
                    data-bs-theme="dark"
                    expand={expand}
                    className="bg-body-tertiary "
                >
                    <Container fluid className="fw-bold ">
                        <Navbar.Brand href="#">
                            {" "}
                            <img
                                src={escudo}
                                width="75rem"
                                className="d-inline-block align-top ms-2 rounded"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Brand href="#">
                            <div className="glitch-wrapper">
                                <div className="glitch" data-glitch="San Fernando">
                                    San Fernando
                                </div>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            className="fw-bold "
                            bg="dark"
                            data-bs-theme="dark"
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    <img
                                        src={black}
                                        alt="escudo sanFer"
                                        style={{ width: "8rem" }}
                                    />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/">Inicio</Nav.Link>
                                    <Nav.Link href="#redes">Nuestra Redes</Nav.Link>
                                    <Nav.Link href="#camiseta">Tienda</Nav.Link>
                                    <Nav.Link href="#nextMatch">Fechas</Nav.Link>
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
