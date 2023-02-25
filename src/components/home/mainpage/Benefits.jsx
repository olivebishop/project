import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faGem, faHandshake, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import '../mainpage/css/Benefits.css';

const Benefits = () => {
  return (
    <section className="benefits-section">
      <Container>
        <h2>Benefits</h2>
        <Row>
          <Col md={3} sm={6} xs={12}>
            <div className="benefits-item">
              <div className="benefits-icon-container">
                <FontAwesomeIcon icon={faShoppingBag} className="benefits-icon" />
              </div>
              <h3>Easy Shopping</h3>
              <p>Shop conveniently from the comfort of your home and enjoy hassle-free transactions.</p>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <div className="benefits-item">
              <div className="benefits-icon-container">
                <FontAwesomeIcon icon={faGem} className="benefits-icon" />
              </div>
              <h3>Quality Products</h3>
              <p>Our products are carefully curated to ensure that we only offer the best quality to our customers.</p>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <div className="benefits-item">
              <div className="benefits-icon-container">
                <FontAwesomeIcon icon={faHandshake} className="benefits-icon" />
              </div>
              <h3>Excellent Customer Service</h3>
              <p>Our friendly and professional customer service team is always.</p>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12}>
            <div className="benefits-item">
              <div className="benefits-icon-container">
                <FontAwesomeIcon icon={faShieldAlt} className="benefits-icon" />
              </div>
              <h3>Secure Transactions</h3>
              <p>Shop with confidence knowing that all transactions on our website are safe and secure.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Benefits;
