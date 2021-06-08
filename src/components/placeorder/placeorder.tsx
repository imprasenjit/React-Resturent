import {Container,Row,Col} from 'react-bootstrap'
import { connect } from 'react-redux'
import {useEffect,useState} from 'react'
const Placeorder = (props:any) => {
    const { cart_products } = props;
    const [sum, setSum] = useState(0)
    useEffect(() => {
        let sum = 0;
        if (cart_products.length > 0)
            sum = cart_products.reduce((accum: number, val: any) => {
                return accum + (val.qty * parseInt(val.price))
            }, 0);
        setSum(sum);
    }, [cart_products])
    return (
        <Container>
            {sum > 0 &&
            <><Row>
                <br/>
                <br/>
                <Col xs={12}><h4 className="text-center">No Of Items:{ cart_products.length }</h4></Col>
            </Row>
            
                <Row>
                <Col xs={12}><h4 className="text-center">Total : &#x20B9; {sum}</h4></Col>
            </Row></>
            }
        </Container>
    )
}
const mapStateToProps = (state: any) => ({
    cart_products: state.cart.products
})

export default connect(mapStateToProps, null)(Placeorder);