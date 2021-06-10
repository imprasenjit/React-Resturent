import { Container, Row, Col, Form, Button } from 'react-bootstrap'
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
                        <Col xs={12}><h4 className="text-center">No Of Items:{cart_products.length}</h4></Col>
                    </Row>
                    <Row>
                        <Col xs={12}><h4 className="text-center">Total : &#x20B9; {sum}</h4></Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Formik
                                initialValues={{
                                    name: '',
                                    mobile: ''
                                }}
                                validate={(values: any) => {
                                    const errors = {} as any;
                                    if (!values.name) {
                                        errors.name = 'Required';
                                    } else if (values.name.length < 5) {
                                        errors.name = 'Must be 5 characters or More';
                                    }

                                    if (!values.mobile) {
                                        errors.mobile = 'Required';
                                    } else if (values.mobile.length < 10) {
                                        errors.mobile = 'Must be 10 numbers';
                                    }
                                    console.log(errors)
                                    return errors;
                                }
                                }
                                onSubmit={
                                    (values) => {
                                        alert(JSON.stringify(values, null, 2))
                                    }
                                }
                            >

                                {({
                                    handleSubmit,
                                    handleChange,
                                    isSubmitting,
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
                                                    name="name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    isValid={touched.name && errors.name===undefined}
                                                    isInvalid={touched.name && errors.name!==undefined}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                   {errors.name}
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" controlId="validationFormik02">
                                                <Form.Label>Mobile</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="mobile"
                                                    value={values.mobile}
                                                    onChange={handleChange}
                                                isValid={touched.mobile && errors.mobile===undefined}
                                                isInvalid={touched.name && errors.mobile!==undefined}
                                                
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                {errors.mobile}

                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>
                                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                                <span id="loginInfoSubmitProcess" className={isSubmitting ? "show" : "d-none"}>
                                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                </span>
                                                Submit
                                            </button>
                                    </Form>
                                )}
                            </Formik>
                        </Col>
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