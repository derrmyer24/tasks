import React from "react";
import "./App.css";
import catPhoto from "./pexels-peter-xie-371876898-34574274.jpg";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1> <br />
                Hello World
                <p>Derrick was here!</p>
            </header>
            <img
                src={catPhoto}
                alt="free use cute cat photo"
                width="500"
                height="300"
            />
            <p>Shopping List</p>
            <ul>
                <li>Bread</li>
                <li>Cheese</li>
                <li>Milk</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            className="rectangle"
                            style={{ backgroundColor: "red" }}
                        />
                    </Col>
                    <Col>
                        <div
                            className="rectangle"
                            style={{ backgroundColor: "red" }}
                        />
                    </Col>
                    q
                </Row>
            </Container>
        </div>
    );
}

export default App;
