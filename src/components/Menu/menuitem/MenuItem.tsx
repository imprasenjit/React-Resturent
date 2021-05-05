import { Col, Row, Image } from "react-bootstrap";
import './Menuitem.scss'
const MenuItem = (props:any) => {
   
    return (
        <>
            <Row onClick={()=>props.onItemClick(props.id)}>
                <Col xs={4}><Image src={props.product_img} alt="" fluid /></Col>
                <Col xs={5} className="text-left pt-4 pl-0 pr-0 border-bottom">{props.name}<br />
                    <span className="ingridients">Ingredients: {props.ingredients}</span></Col>
                <Col xs={3} className="text-right pt-4 border-bottom">&#x20B9;{props.price}</Col>
            </Row>
        </>
    )
}

export default MenuItem;