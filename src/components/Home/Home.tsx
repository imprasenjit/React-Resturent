import Menulist from '../Menu/Menulist'
import {useState} from 'react'
import { Row, Button, Container } from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Home = (props:any) => {
    const { cart_products } = props;
    const [sum, setsum] = useState(0)
    
    return (
        <>
            <Menulist />
            <br/>
            <br/>
            <br/>
            <Container>
                <Row>
                <Button as={Link } to="/checkout" variant="primary" className="sticky" size="lg" block>
                        { cart_products.length >0?cart_products.length:""} Item Checkout
                </Button>
            </Row>
            </Container>
        </>)
}

const mapStateToProps = (state: any) => ({
    cart_products: state.cart.products
})

export default connect(mapStateToProps)(Home);