import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header'
import { Container, Row, Col } from 'react-bootstrap'
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store,persistor} from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Container fluid>
        <Row>
          <Col className="p-0">
            <Header />
          </Col>
        </Row>        
        </Container>
        </PersistGate>
    </Provider>
  );
}
export default App;
