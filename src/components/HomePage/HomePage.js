import { Card, Container} from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <Card>
        <Card.Body>
            <Card.Title>Home</Card.Title>
            <Card.Text>Veliki pozdrav za tebe</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default HomePage;
