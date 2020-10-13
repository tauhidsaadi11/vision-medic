import React from "react"
import {Container, Button} from "shards-react"

const Login = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>Oopps ....</h2>
        <h3>Under Construction</h3>
        <p>The Page under Construction ....</p>
        <Button pill>&larr; Go Back</Button>
      </div>
    </div>
  </Container>
);

export default Login;