import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./CardPage.module.css";
import { CardHomeInterface } from "../interfaces/CardHomeInterface";
import { Link } from "react-router-dom";

const CardPage = (props: CardHomeInterface) => {
  return (
    <div className={styles.cardContainer}>
      <Card className={styles.carding}>
        <Card.Img variant="top" style={{ height: "50%" }} src={props.images} />
        <Card.Body>
          <Card.Title className={styles.title}>{props.title}</Card.Title>
          <Card.Text className={styles.description}>
            {props.description}
          </Card.Text>
          <Link to={props.link} className={styles.bottom}>
            <Button className={styles.button}>Go To</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPage;
