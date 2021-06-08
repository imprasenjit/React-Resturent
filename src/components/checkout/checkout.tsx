import { useEffect, useState } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCartValue,removeCartItem } from '../../redux/cart/cart-actions'
import Cartitem from '../cartitem/cartItem'
const Checkout = (props: any) => {
    const { cart_products,removeCartItem } = props;
    const [sum, setSum] = useState(0)

    console.log(sum);
    useEffect(() => {
        let sum = 0;
        if (cart_products.length > 0)
            sum = cart_products.reduce((accum: number, val: any) => {
                return accum + (val.qty * parseInt(val.price))
            }, 0);
        setSum(sum);
    }, [cart_products])
    function itemClick(x: any) {
        removeCartItem(x);
    }
    let list = cart_products.map(function (val: any, key: number) {
        //console.log(val)
        return <Cartitem {...val} onItemClick={itemClick} key={key} />
    })
    return (
        <Container>
            {list}
            {sum === 0 && "Empty Cart"}
            {sum > 0 &&
                <><Row>
                <Col xs={12}><span className="float-right">Total : &#x20B9; {sum}</span></Col>
            </Row>
            <Row>
                    <Button as={Link} to="/placeorder" variant="primary" className="" size="lg" block>
                        Place Order
                </Button>
                </Row>
                </>
            }

        </Container>
    )
}
const mapStateToProps = (state: any) => ({
    cart_products: state.cart.products
})
const mapDispatchToProps = (dispatch: any) => ({
    setCartValue: (product: any) => dispatch(setCartValue(product)),
    removeCartItem: (product: any) => dispatch(removeCartItem(product))
})
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);