import Menulist from '../Menu/Menulist'
import { Row, Button, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <>
            <Menulist />
            <Container>
                <Row>
                <Button as={Link } to="/checkout" variant="primary" className="sticky" size="lg" block>
                    Checkout
                </Button>
            </Row>
            </Container>
        </>)
}