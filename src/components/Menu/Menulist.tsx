import Menuitem from './menuitem/MenuItem'
import React,{useState } from 'react'
import { items, getItem } from '../../data/items'
import ItemModal from './menuitem/ItemModal'
import { Container } from 'react-bootstrap'
import { setCartValue } from '../../redux/cart/cart-actions'
import { connect } from 'react-redux'
const Menulist = React.memo((props: any) => {
    const [modalShow, setModalShow] = useState(false)
    const [product, setProduct] = useState({})
    function itemClick(x: any) {
        //console.log(props.cart_products);
        let product = getItem(x) ?? {} as any;
        if (product !== undefined && product !== null) {
            product.qty = 0;
            console.log(props.cart_products)
            props.cart_products.forEach((val: any) => {
                if (val.product_id === x) {
                    product.qty = val.qty
                }
            })
            setProduct(product);
            setModalShow(true);
        } else {
            console.log("No Product found")
        }
    }
    let list = items.map(function (val, key) {
        //console.log(val)
        return <Menuitem {...val} onItemClick={itemClick} key={key} />
    })
    return (
        <Container>
            {list}
            <ItemModal show={modalShow} {...product} setcartmyvalue={props.setCartValue}
                onHide={() => setModalShow(false)}></ItemModal>
        </Container>
    )
})
const mapStateToProps = (state: any) => ({
    cart_products: state.cart.products
})
const mapDispatchToProps = (dispatch: any) => ({
    setCartValue: (product: any) => dispatch(setCartValue(product))
})
export default connect(mapStateToProps, mapDispatchToProps)(Menulist);