import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/Logo-1.png";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {

    const { cartItems } = useSelector((state)=> state.cart);
    console.log(cartItems.length);

    return (
        <header>
            <Navbar bg="white" variant="dark" expand="md" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img src={logo} alt="tabelakapinda" />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link className="text-dark"> 
                                    <FaShoppingCart style={{marginRight:'5px'}} fill="dark"/>
                                    Sepet
                                    {
                                        cartItems.length > 0 && (
                                            <Badge pill bg="success" style={{marginLeft:'5px'}}>
                                                {cartItems.reduce((a,c)=> a + c.qty , 0 )}
                                            </Badge>   
                                        )
                                    }
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link className="text-dark">
                                    <FaUser fill="dark" style={{marginLeft:'5px',marginRight:'5px'}} />
                                    Giriş Yap
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
