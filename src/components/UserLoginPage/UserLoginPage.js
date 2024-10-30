import { useState } from "react";
import { Button, Card, Container, Form, Col } from "react-bootstrap";

function UserLoginPage() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const printCredentials = () => {
        console.log('Email:', email);
        console.log('Password:', password);
    }

    return (
        <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <Col md={6}>
                <Card>
                    <Card.Body>
                        <Card.Title>User Login</Card.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label htmlFor="email">Email:</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    id="email" 
                                    value={email} 
                                    onChange={handleEmailChange} // Ažuriramo stanje prilikom promene
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
                                <Button 
                                    variant="primary" 
                                    onClick={printCredentials} // Pozivamo funkciju za ispis
                                >
                                    Log in
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
}

export default UserLoginPage;
