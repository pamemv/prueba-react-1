import { useState, useEffect } from "react";
import Heroe from "./Heroe";
import Buscador from "./Buscador";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

//estados
function MiApi() {
  const [heroes, setHeroes] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //llama api y me muestra los datos
  useEffect(() => {
    consultarApi();
  }, []);

  const handleChangeFiltro = (event) => {
    setFiltro(event.target.value);
  };

  const consultarApi = async () => {
    setLoading(true);
    const url = `https://superhero-search.p.rapidapi.com/api/${
      filtro.length > 0 ? `?hero=${filtro}` : "heroes"
    }`;
    console.log(url);

    const options = {
      headers: {
        "X-RapidAPI-Key": "ff75ca0c83msh75dd021052241b3p1b747ajsn89d9d8c1b852",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const heroes = await response.json();

      setHeroes(
        filtro.length > 0
          ? [heroes]
          : heroes.sort((a, b) => a.name.localeCompare(b.name))
      );

      setError(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <Container className="g-4 mt-5">
      <Row className="mb-5">
        <Buscador
          handleChangeFiltro={handleChangeFiltro}
          search={consultarApi}
        />
      </Row>
      <Row className="g-5">
        {loading ? (
          <Row className="justify-content-center mt-5">
            <Spinner animation="border" role="status" />
          </Row>
        ) : !error ? (
          heroes.map((heroe) => (
            <Col key={heroe.id} xs={12} sm={6} md={3} lg={3}>
              <Heroe heroe={heroe} />
            </Col>
          ))
        ) : (
          <Row className="text-center mt-5">
            <h5>Héroe no fue encontrado :(</h5>
          </Row>
        )}
      </Row>
    </Container>
  );
}
export default MiApi;
