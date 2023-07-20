import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardHomeInterface } from "../interfaces/CardHomeInterface";
import { Link } from "react-router-dom";
import styles from "./CardHome.module.css";

const CardHome = (props: CardHomeInterface) => {
  return (
    <div className={styles.cardContainer}>
      <Card className={styles.carding}>
        <Card.Img className={styles.cardImg} variant="top" src={props.images} />

        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.title}>{props.title}</Card.Title>
          <Card.Text className={styles.description}>
            {props.description}
          </Card.Text>
          <Link to={`${props.link}`}>
            <Button className={styles.button}>Go To</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardHome;
