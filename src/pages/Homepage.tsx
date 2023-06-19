import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import CardHome from "../components/CardHome";
// @ts-ignore
import workoutImg from "../assests/images/workout.jpg";
//@ts-ignore
// import healthContentImg from "../assests/images/health-content.jpg";
import styles from "./Homepage.module.css";
import { CardHomeInterface } from "../interfaces/CardHomeInterface";

const Homepage = () => {
  const [homeCards, setHomeCards] = useState<CardHomeInterface[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    const res = await fetch("http://localhost:3000/homepage");
    const data = await res.json();
    setHomeCards(data);
  };

  return (
    <div className={styles.homepage}>
      <Carousel variant="dark" interval={null} indicators={null!}>
        {homeCards?.map((card) => {
          return (
            <Carousel.Item>
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
