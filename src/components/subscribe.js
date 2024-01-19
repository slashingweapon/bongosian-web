import * as React from "react"
import { navigate } from "gatsby"
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const SubscribeForm = () => {
  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);
    console.log(formData);
    const encodedForm = new URLSearchParams(formData).toString();
    console.log(encodedForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedForm,
    })
      .then(() => navigate("/sub-thanks/"))
      .catch((error) => alert(error));
  };

  return (
    <Form name="newsletter"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="newsForm">

      <Col>
        <FloatingLabel controlId="newsEmail" label="your email address" className="newsControl">
          <Form.Control name="email" type="email"/>
        </FloatingLabel>
      </Col>

      <Col>
        <Form.Group controlId="newsAction" className="newsControl">
          <Form.Select name="action">
            <option value="add">subscribe</option>
            <option value="remove">unsubscribe</option>
          </Form.Select>
        </Form.Group>
      </Col>
      
      <Col>
        <Button variant="primary" type="submit">Send</Button>
      </Col>
        
    </Form>
      
  )

}

export default SubscribeForm