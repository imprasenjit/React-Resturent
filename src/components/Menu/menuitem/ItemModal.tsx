import { useState, useEffect } from "react";
import { Col, Row, Modal, Container, Button, InputGroup, FormControl, Image } from "react-bootstrap";

const ItemModal = (props: any) => {
    //console.log(props.cart_products);
    const [qty, setQty] = useState(0)
    useEffect(() => {
        setQty(props.qty?props.qty:0)
    },[props])
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={{ span: 4, offset: 4 }} md={{ span: 4, offset: 0 }}>
                            <Image src={props.product_img} alt="" fluid className="product-img" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} className="text-center">
                            {props.name}
                        </Col>
                        <Col xs={12} md={12} className="text-center">
                            {props.ingredients}
                        </Col>
                        <Col xs={12} md={12} className="text-center">
                            &#x20B9;{props.price}
                        </Col>
                        <Col xs={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }} className="text-center">
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <Button variant="outline-secondary" onClick={(e) => {
                                        setQty(qty > 0 ? qty - 1 : 0)
                                    }}>-</Button>
                                </InputGroup.Prepend>
                                <FormControl aria-describedby="basic-addon1" value={qty} onChange={() => { }} />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" onClick={(e) => {
                                        setQty(qty + 1)
                                    }}>+</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={() => {
                    props.onHide()
                    props.setcartmyvalue({
                        product_id: props.id,
                        product_img:props.product_img,
                        qty: qty,
                        name:props.name,
                        price:props.price
                    })
                }}>Add to cart</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default ItemModal