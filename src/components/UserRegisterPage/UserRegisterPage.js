import { useState } from "react";
import { Button, Card, Container, Form, Col, Row } from "react-bootstrap";

function UserRegisterPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <Col md={6}>
                <Card>
                    <Card.Body>
                        <Card.Title>User Registration</Card.Title>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm={6}>
                                    <Form.Label htmlFor="firstName">First Name:</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        id="firstName" 
                                        value={firstName} 
                                        onChange={handleFirstNameChange} 
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Form.Label htmlFor="lastName">Last Name:</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        id="lastName" 
                                        value={lastName} 
                                        onChange={handleLastNameChange} 
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="email">Email:</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    id="email" 
                                    value={email} 
                                    onChange={handleEmailChange} 
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="password">Password:</Form.Label>
                                <Form.Control 
                                    type={passwordVisible ? 'text' : 'password'} 
                                    id="password" 
                                    value={password} 
                                    onChange={handlePasswordChange} 
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Check 
                                    type="checkbox" 
                                    label="Show Password" 
                                    onChange={togglePasswordVisibility} 
                                />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="primary" type="submit">Register</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
}

export default UserRegisterPage;
