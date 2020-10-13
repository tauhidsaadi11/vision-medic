import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

const Login = () => (
  <Container fluid>
    <Row>
      
    </Row>
  </Container>
);

Login.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

Login.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default Login;
