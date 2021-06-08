import { Col, Row,Container, Image } from "react-bootstrap";
import './cartItem.scss'
import { RiDeleteBin5Line } from 'react-icons/ri';
const CartItem = (props:any) => {
   
    return (
        <>
            <Row >
                <Col xs={4}><Image src={props.product_img} alt="" fluid /></Col>
                <Col xs={8} className="text-left pt-4 pl-0 pr-0 border-bottom">
                    <Container><Row>
                        <Col xs={9}>
                        {props.name}
                        </Col>
                        <Col className="text-right" xs={3}>
                        <RiDeleteBin5Line onClick={()=>props.onItemClick(props.product_id)} />
                        </Col>
                    </Row>
                    <Row>
                    <Col xs={12} className="text-right">                        
                        {props.qty} X &#x20B9;{props.price}&nbsp;=&nbsp;&#x20B9;{props.price * props.qty}
                        </Col>
                        </Row>
                        </Container>
                </Col>
            </Row>
        </>
    )
}

export default CartItem;