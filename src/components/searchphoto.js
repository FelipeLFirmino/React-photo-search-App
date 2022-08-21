import React, { useState } from "react";
import { createApi } from "unsplash-js";
import "./search.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const unsplash = createApi({
  accessKey: "2iwN4EaA4kMf7T4tInS6ucgrw31jf_-Dx_frjfImC-w",
});

export default function Search() {
  const [n, setQuery] = useState("");
  const [pics, setPics] = useState(null);

  const searchP = async (e) => {
    e.preventDefault();
    unsplash.search
      .getPhotos({ query: n, orientation: "portrait" })
      .then((response) => {
        setPics(response.response.results);
      });
  };

  return (
    <div>
      <form className="form" onSubmit={searchP}>
        <label htmlFor="query" className="label"></label>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="search here!"
          value={n}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search{" "}
        </button>
      </form>
      <Container fluid>
        <Row>
          <Col md={6} lg={4}>
            {pics?.slice(0, 1).map((photo) => (
              <Card key={photo.id} border="dark" style={{ width: "100%" }}>
                <Card.Img variant="top" src={photo.urls.small} />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {"taken by: " +
                      photo.user.first_name +
                      " " +
                      photo.user.last_name}
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Col>

          <Col md={6} lg={4}>
            {pics?.slice(1, 2).map((photo) => (
              <Card key={photo.id} border="dark" style={{ width: "100%" }}>
                <Card.Img variant="top" src={photo.urls.small} />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {"taken by: " +
                      photo.user.first_name +
                      " " +
                      photo.user.last_name}
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col md={6} lg={4}>
            {pics?.slice(2, 3).map((photo) => (
              <Card key={photo.id} border="dark" style={{ width: "100%" }}>
                <Card.Img variant="top" src={photo.urls.small} />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {"taken by: " +
                      photo.user.first_name +
                      " " +
                      photo.user.last_name}
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={4}>
            {pics?.slice(3, 4).map((photo) => (
              <Card key={photo.id} border="dark" style={{ width: "100%" }}>
                <Card.Img variant="top" src={photo.urls.small} />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {"taken by: " +
                      photo.user.first_name +
                      " " +
                      photo.user.last_name}
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Col>

          <Col md={6} lg={4}>
            {pics?.slice(5, 6).map((photo) => (
              <Card key={photo.id} border="dark" style={{ width: "100%" }}>
                <Card.Img variant="top" src={photo.urls.small} />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {"taken by: " +
                      photo.user.first_name +
                      " " +
                      photo.user.last_name}
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col md={6} lg={4}>
            {pics?.slice(7, 8).map((photo) => (
              <Card key={photo.id} border="dark" style={{ width: "100%" }}>
                <Card.Img variant="top" src={photo.urls.small} />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {"taken by: " +
                      photo.user.first_name +
                      " " +
                      photo.user.last_name}
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
