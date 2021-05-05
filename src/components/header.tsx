import {Navbar,Nav} from 'react-bootstrap'
export default function header() {
    return (
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Order Food</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Checkout</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>        
      </Navbar>
    )
}