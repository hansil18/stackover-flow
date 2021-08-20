import {Navbar, Nav, Button, Container, Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'



const Header = () => {

    return (
        <Navbar style={{height: 50, background: 'black'}} sticky="top">
            <Navbar.Brand className="mx-auto">
                <span style={{color:'#ffffff', fontWeight: 600}}>Code Solver</span>
            </Navbar.Brand>
            <Nav className="d-flex mx-auto">
                <Link to='/Signup'>
                    <Nav.Item  className="mr-4">
                        <Button variant="outline-success">
                            Signup
                        </Button>
                    </Nav.Item>
                </Link>
                <Link to='/Login'>
                    <Nav.Item style = {{color: 'white'}}>
                        <Button variant="success">
                            Login
                        </Button>
                    </Nav.Item>
                </Link>
            </Nav>
        </Navbar>
    )
}

export default Header;
