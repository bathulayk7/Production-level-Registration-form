import React from "react";
import Header from "./shared/Header/header.component";
import Footer from "./shared/Footer/footer.component";
import Register from "./Register/register.component";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <Container>
  
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
  
      <Row>
        <Col md={4}>
          <Register />
        </Col>
      </Row>
  
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
  
    </Container>
  );
}

export default App;
