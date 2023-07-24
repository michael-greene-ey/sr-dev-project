import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import CardHome from "../components/CardHome";
import styles from "./Homepage.module.css";
import { CardHomeInterface } from "../interfaces/CardHomeInterface";
import { HOMEPAGE } from "../assests/Constants";

const Homepage = () => {
  const [homeCards, setHomeCards] = useState<CardHomeInterface[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    try {
      const res = await fetch(HOMEPAGE);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setHomeCards(data);
    } catch (error) {
      error instanceof Error
        ? console.log("An error occurred:", error.message)
        : console.log("Unknown Failure", error);
    }
  };

  return (
    <div className={styles.homepage}>
      <Carousel variant="dark" interval={null} indicators={null!}>
        {homeCards?.map((card) => {
          return (
            <Carousel.Item key={card.id}>
              <CardHome
                title={card.title}
                description={card.description}
                images={card.images}
                link={card.link}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Homepage;
