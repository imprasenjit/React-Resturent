import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { Formik } from 'formik'
const Placeorder = (props: any) => {
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
                <>
                    <Row>
                        <br />
                        <br />
                        <Col xs={12}><h4 className="text-center">No Of Items:{cart_products.length}</h4></Col>
                    </Row>
                    <Row>
                        <Col xs={12}><h4 className="text-center">Total : &#x20B9; {sum}</h4></Col>
                    </Row>
                    <Row>
                        <Formik
                            initialValues={{
                            name: '',
                                mobile:''
                            }}
                        validate={(values: any) => {
                                const errors = {} as any;
                                if (!values.name) {
                                    errors.firstName = 'Required';
                                } else if (values.firstName.length > 15) {
                                    errors.firstName = 'Must be 15 characters or less';
                                }
                        
                                if (!values.mobile) {
                                    errors.lastName = 'Required';
                                } else if (values.lastName.length > 20) {
                                    errors.lastName = 'Must be 20 characters or less';
                                }                       
                                
                        
                                return errors;
                            }
                            }
                            onSubmit={
                                values => {
                                    alert(JSON.stringify(values, null, 2))
                                }
                            }
                        >

                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                touched,
                                isValid,
                                errors,
                            }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Form.Row>
                                        <Form.Group as={Col} md="4" controlId="validationFormik01">
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="firstName"
                                                value={values.name}
                                                onChange={handleChange}
                                                isValid={touched.name && !errors.name}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                                            <Form.Label>Mobile</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="Mobile"
                                                value={values.mobile}
                                                onChange={handleChange}
                                                isValid={touched.mobile && !errors.mobile}
                                            />

                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>
                                    <Button type="submit">Submit form</Button>
                                </Form>
                            )}
                        </Formik>
                    </Row>
                </>
            }
        </Container >
    )
}
const mapStateToProps = (state: any) => ({
    cart_products: state.cart.products
})

export default connect(mapStateToProps, null)(Placeorder);