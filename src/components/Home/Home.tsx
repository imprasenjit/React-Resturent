import Menulist from '../Menu/Menulist'
import { Row, Button,Container } from 'react-bootstrap'

export default function Home() {
    return (
        <>
            <Menulist />
            <Container>
                <Row>
                <Button href="/checkout" variant="primary" className="sticky" size="lg" block>
                    Checkout
                </Button>
            </Row>
            </Container>
        </>)
}