import { Navbar, Nav } from 'react-bootstrap'
import Routes from './../shared/routes'
import { Link } from 'react-router-dom'

const header_component = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Order Food</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>

        <Nav.Link href="/checkout">Checkout</Nav.Link>
      </Nav>
    </Navbar>
  )
}


export default Routes(header_component);
