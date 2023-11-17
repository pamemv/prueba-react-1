import Card from "react-bootstrap/Card";

function Heroe({ heroe }) {
  return (
    <Card>
      <Card.Img variant="top" src={heroe.images.lg} />
      <Card.Body>
        <Card.Title>{heroe.name}</Card.Title>
        <Card.Text>{heroe.biography.fullName}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Heroe;
