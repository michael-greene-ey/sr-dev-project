import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./CardHome.module.css";
import { CardHomeInterface } from "../interfaces/CardHomeInterface";
import { Link } from "react-router-dom";

const CardHome = (props: CardHomeInterface) => {
  return (
    <div className={styles.card}>
      <Card
        className="bg-dark text-white"
        style={{ width: "50vw", height: "50em" }}
      >
        <Card.Img variant="top" style={{ height: "80%" }} src={props.images} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Link to={`${props.link}`}>
            <Button variant="primary">Go To</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardHome;