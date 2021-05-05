import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import Menulist from './components/Menu/Menulist'
import { Container, Row, Col } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <Container fluid>
      <Row>
        <Col className="p-0">
        <Header/>
        </Col>      
        </Row>
        
      <Menulist/>
      </Container>
      </Provider>
  );
}

export default App;
