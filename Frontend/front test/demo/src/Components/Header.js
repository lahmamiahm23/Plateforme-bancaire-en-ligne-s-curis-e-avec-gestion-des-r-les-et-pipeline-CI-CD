import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useSession } from '../Security/SessionContext';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useSession();
    const { item, setItem } = useSession();
    const history = useHistory();

    const logoutHandler = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("role");
        setIsLoggedIn(false);
        setItem(0);
        console.log("Déconnexion :- " + isLoggedIn);
        history.push("/");
    };

    const homeHandler = () => {
        const encodedRole = sessionStorage.getItem('role');
        const decodedRole = atob(encodedRole);
        if (decodedRole === 'USER') history.push('/user/welcome');
        else if (decodedRole === 'MANAGER') history.push('/employee/welcome');
        else if (decodedRole === 'ADMIN') history.push('/admin/welcome');
    };

    const navbarStyle = {
        backgroundColor: '#0d6efd',
    };

    const brandStyle = {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        textDecoration: 'none',
    };

    const linkStyle = {
        color: 'red',
        marginRight: '1rem',
        fontWeight: 500,
        cursor: 'pointer',
    };

    const linkHoverStyle = {
        color: '#ffc107',
    };

    return (
        <Navbar expand="lg" style={navbarStyle}>
            <Container>
                <Navbar.Brand as={Link} to="/" style={brandStyle}>
                    EMI Banque
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={homeHandler} style={linkStyle}>
                            Accueil
                        </Nav.Link>
                        <Nav.Link as={Link} to="/aboutUs" style={linkStyle}>
                            À propos
                        </Nav.Link>
                        <Nav.Link as={Link} to="/branchList" style={linkStyle}>
                            Liste des agences
                        </Nav.Link>
                        <Nav.Link as={Link} to="/addUser" style={linkStyle}>
                            Ouvrir un compte
                        </Nav.Link>
                        {isLoggedIn ? (
                            <Nav.Link onClick={logoutHandler} style={linkStyle}>
                                Déconnexion
                            </Nav.Link>
                        ) : (
                            <NavDropdown title="Connexion" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/employee_login">
                                    Connexion employé
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/user_login">
                                    Connexion utilisateur
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
